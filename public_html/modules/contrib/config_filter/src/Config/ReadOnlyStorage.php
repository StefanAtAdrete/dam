<?php

namespace Drupal\config_filter\Config;

use Drupal\config_filter\Exception\UnsupportedMethod;
use Drupal\Core\Config\StorageInterface;

/**
 * Class ReadOnlyStorage.
 *
 * This is like any other StorageInterface, except it does not allow writing.
 *
 * @package Drupal\config_filter\Config
 */
class ReadOnlyStorage implements StorageInterface {

  /**
   * The config storage that we are decorating.
   *
   * @var \Drupal\Core\Config\StorageInterface
   */
  protected $storage;

  /**
   * Create a ReadOnlyStorage decorating another storage.
   *
   * @param \Drupal\Core\Config\StorageInterface $storage
   *   The decorated storage.
   */
  public function __construct(StorageInterface $storage) {
    $this->storage = $storage;
  }

  /**
   * {@inheritdoc}
   */
  public function exists($name) {
    return $this->storage->exists($name);
  }

  /**
   * {@inheritdoc}
   */
  public function read($name) {
    return $this->storage->read($name);
  }

  /**
   * {@inheritdoc}
   */
  public function readMultiple(array $names) {
    return $this->storage->readMultiple($names);
  }

  /**
   * {@inheritdoc}
   */
  public function write($name, array $data) {
    throw new UnsupportedMethod(__METHOD__ . ' is not allowed on a ReadOnlyStorage');
  }

  /**
   * {@inheritdoc}
   */
  public function delete($name) {
    throw new UnsupportedMethod(__METHOD__ . ' is not allowed on a ReadOnlyStorage');
  }

  /**
   * {@inheritdoc}
   */
  public function rename($name, $new_name) {
    throw new UnsupportedMethod(__METHOD__ . ' is not allowed on a ReadOnlyStorage');
  }

  /**
   * {@inheritdoc}
   */
  public function encode($data) {
    return $this->storage->encode($data);
  }

  /**
   * {@inheritdoc}
   */
  public function decode($raw) {
    return $this->storage->decode($raw);
  }

  /**
   * {@inheritdoc}
   */
  public function listAll($prefix = '') {
    return $this->storage->listAll($prefix);
  }

  /**
   * {@inheritdoc}
   */
  public function deleteAll($prefix = '') {
    throw new UnsupportedMethod(__METHOD__ . ' is not allowed on a ReadOnlyStorage');
  }

  /**
   * {@inheritdoc}
   */
  public function createCollection($collection) {
    return new static($this->storage->createCollection($collection));
  }

  /**
   * {@inheritdoc}
   */
  public function getAllCollectionNames() {
    return $this->storage->getAllCollectionNames();
  }

  /**
   * {@inheritdoc}
   */
  public function getCollectionName() {
    return $this->storage->getCollectionName();
  }

}
