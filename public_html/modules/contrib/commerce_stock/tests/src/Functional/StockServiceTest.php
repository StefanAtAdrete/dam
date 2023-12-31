<?php

namespace Drupal\Tests\commerce_stock\Functional;

use Drupal\commerce_product\Entity\ProductVariation;

/**
 * Ensure the stock services work correctly.
 *
 * @coversDefaultClass \Drupal\commerce_stock\StockServiceManager
 *
 * @group commerce_stock
 */
class StockServiceTest extends StockBrowserTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = [
    'commerce_stock_local',
  ];

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();
    $this->adminUser = $this->drupalCreateUser(['administer commerce stock']);
    $this->drupalLogin($this->adminUser);
  }

  /**
   * Tests stock service manager and configuration changes through the UI.
   *
   * @covers ::getService
   * @covers ::listServices
   */
  public function testServiceConfiguration() {
    $this->assertEquals($this->config('commerce_stock.service_manager')->get('default_service_id'), NULL);
    $this->drupalGet('admin/commerce/config/stock/settings');
    $this->assertSession()->pageTextContains('Stock services');
    $this->assertSession()->pageTextContains('Services per entity type');
    $edit = [
      'default_service_id' => 'local_stock',
      'commerce_product_variation_default_service_id' => 'always_in_stock',
    ];
    $this->submitForm($edit, t('Save configuration'));
    $this->assertEquals($this->config('commerce_stock.service_manager')->get('default_service_id'), 'local_stock');
    $this->assertEquals($this->config('commerce_stock.service_manager')->get('commerce_product_variation_default_service_id'), 'always_in_stock');
    $this->assertEquals($this->stockServiceManager->getService($this->product->variations->first()->entity), $this->stockServiceManager->listServices()['always_in_stock']);
  }

}
