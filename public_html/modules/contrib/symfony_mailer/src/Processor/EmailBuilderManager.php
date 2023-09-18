<?php

namespace Drupal\symfony_mailer\Processor;

use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Plugin\DefaultPluginManager;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Provides the email builder plugin manager.
 */
class EmailBuilderManager extends DefaultPluginManager implements EmailBuilderManagerInterface {

  use StringTranslationTrait;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Whether cache has been built.
   *
   * @var bool
   */
  protected $builtCache = FALSE;

  /**
   * Array of registered override plugin settings.
   *
   * The key is the email ID to override and the value is the plugin ID.
   *
   * @var string[]
   */
  protected $overrideMapping = [];

  /**
   * Constructs the EmailBuilderManager object.
   *
   * @param \Traversable $namespaces
   *   An object that implements \Traversable which contains the root paths
   *   keyed by the corresponding namespace to look for plugin implementations.
   * @param \Drupal\Core\Cache\CacheBackendInterface $cache_backend
   *   Cache backend instance to use.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler to invoke the alter hook with.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   */
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler, EntityTypeManagerInterface $entity_type_manager) {
    parent::__construct('Plugin/EmailBuilder', $namespaces, $module_handler, 'Drupal\symfony_mailer\Processor\EmailBuilderInterface', 'Drupal\symfony_mailer\Annotation\EmailBuilder');
    $this->entityTypeManager = $entity_type_manager;
    $this->setCacheBackend($cache_backend, 'symfony_mailer_builder_plugins');
    $this->alterInfo('mailer_builder_info');
  }

  /**
   * {@inheritdoc}
   */
  public function processDefinition(&$definition, $plugin_id) {
    $parts = explode('.', $plugin_id);
    $type = $definition['type'] = array_shift($parts);
    $definition['sub_type'] = $parts ? array_shift($parts) : '';

    // Look up the related entity or module, which can be used to generate the
    // label and provider.
    if ($definition['has_entity']) {
      if ($entity_type = $this->entityTypeManager->getDefinition($type, FALSE)) {
        $default_label = $entity_type->getLabel();
        $override_provider = $entity_type->getProvider();
      }
    }
    elseif ($this->moduleHandler->moduleExists($type)) {
      $default_label = $this->moduleHandler->getName($type);
      $override_provider = $type;
    }

    if ($definition['override']) {
      // Default the provider, or fallback to a dummy provider that will cause
      // the definition to be removed if the related module is not installed.
      // @see DefaultPluginManager::findDefinitions()
      $definition['provider'] = $override_provider ?? '_';

      if ($definition['override'] === TRUE) {
        $definition['override'] = [$plugin_id];
      }
    }

    if (isset($default_label) && !$definition['label']) {
      // Default the label.
      $definition['label'] = $default_label;
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getImportInfo() {
    @trigger_error('EmailBuilderManagerInterface::getImportInfo() is deprecated in symfony_mailer:1.3.0 and is removed from symfony_mailer:2.0.0. Instead you should use OverrideManagerInterface::getInfo(). See https://www.drupal.org/node/3354665', E_USER_DEPRECATED);
    return \Drupal::service('symfony_mailer.override_manager')->getInfo();
  }

  /**
   * {@inheritdoc}
   */
  public function importRequired() {
    @trigger_error('EmailBuilderManagerInterface::importRequired() is deprecated in symfony_mailer:1.3.0 and is removed from symfony_mailer:2.0.0. The concept has been removed and you can assume a value of FALSE. See https://www.drupal.org/node/3354665', E_USER_DEPRECATED);
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function import(string $id) {
    @trigger_error('EmailBuilderManagerInterface::import() is deprecated in symfony_mailer:1.3.0 and is removed from symfony_mailer:2.0.0. Instead you should use OverrideManagerInterface::action(). See https://www.drupal.org/node/3354665 See https://www.drupal.org/node/3354665', E_USER_DEPRECATED);
    \Drupal::service('symfony_mailer.override_manager')->action($id, 'import');
  }

  /**
   * {@inheritdoc}
   */
  public function importAll() {
    @trigger_error('EmailBuilderManagerInterface::import() is deprecated in symfony_mailer:1.3.0 and is removed from symfony_mailer:2.0.0. Instead you should use OverrideManagerInterface::action() See https://www.drupal.org/node/3354665', E_USER_DEPRECATED);
    \Drupal::service('symfony_mailer.override_manager')->action('_', 'import');
  }

  /**
   * {@inheritdoc}
   */
  public function setImportState(string $id, int $state) {
    @trigger_error('EmailBuilderManagerInterface::setImportState() is deprecated in symfony_mailer:1.3.0 and is removed from symfony_mailer:2.0.0. Instead you should use OverrideManagerInterface::action(). See https://www.drupal.org/node/3354665', E_USER_DEPRECATED);
  }

  /**
   * {@inheritdoc}
   */
  public function createInstanceFromMessage(array $message) {
    $this->buildCache();
    $suggestions = [
      "$message[module].$message[key]",
      $message['module'],
    ];

    foreach ($suggestions as $plugin_id) {
      if ($this->hasDefinition($plugin_id)) {
        return $this->createInstance($plugin_id);
      }
      if ($override_id = $this->overrideMapping[$plugin_id] ?? NULL) {
        return $this->createInstance($override_id);
      }
    }
  }

  /**
   * {@inheritdoc}
   *
   * Expose findDefinitions() as public, for internal use only.
   */
  public function findDefinitions() {
    $definitions = parent::findDefinitions();
    return $definitions;
  }

  /**
   * Build cache of information based on definitions.
   */
  protected function buildCache() {
    if (!$this->builtCache) {
      foreach ($this->getDefinitions() as $id => $definition) {
        foreach ($definition['override'] as $override_id) {
          $this->overrideMapping[$override_id] = $id;
        }
      }
      $this->builtCache = TRUE;
    }
  }

}
