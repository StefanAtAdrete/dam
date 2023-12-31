<?php

namespace Drupal\Tests\social_post\Functional;

use Drupal\Tests\social_api\Functional\SocialApiTestBase;

/**
 * Defines a base class for testing Social Post implementers.
 */
abstract class SocialPostTestBase extends SocialApiTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = ['block', 'link', 'social_post'];

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    $this->adminUserPermissions = ['administer social api autoposting'];
    $this->moduleType = 'social-post';
    parent::setUp();
  }

}
