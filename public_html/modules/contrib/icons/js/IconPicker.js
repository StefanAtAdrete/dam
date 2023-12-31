/**
 * @file
 * Provides an Icon Picker for item lists.
 */

(function ($, Drupal, once) {

  'use strict';

  /**
   * Generate a custom dropdown based on unordered list and a select dropdown
   * with rendered icons.
   */
  Drupal.behaviors.iconsPicker = {

    attach: function (context, settings) {
      // Icon picker select element(s).
      const $iconPicker = $(once('iconPicker', '.js-form-type-icon-select'));

      // Go through all found icon picker select elements.
      $iconPicker.each(function () {
        // Set icon picker select element on $formItem.
        const $formItem = $(this);

        // Set default hide status on elements.
        $('select', $formItem).hide();
        const $dropdownList = $('.icons-picker > .item-list > ul', $formItem);

        $dropdownList.hide();

        // Set the selected list item and icon label.
        const $selectedListItem = $('li.selected', $dropdownList);
        var icon_label = $('li.icons-select__item', $dropdownList).first().html();

        // Change the icon label if selected list item is found.
        if ($selectedListItem.length > 0) {
          icon_label = $selectedListItem.first().html();
        }

        const $iconPickerSelected = $('.icons-picker--selected', $formItem);

        // Set the default selected item label.
        $iconPickerSelected.html(icon_label);

        // Add click event binding to the clickable list items (icons).
        $('li.icons-select__item', $dropdownList).on('click', {
          $dropdownList: $dropdownList,
          $formItem: $formItem,
          $iconPickerSelected: $iconPickerSelected
        }, Drupal.behaviors.iconsPicker.selectItem);

        // Collapse list when clicking on the selected label.
        $iconPickerSelected.click(function () {
          $(this).toggleClass('active');
          $dropdownList.toggle();
        });
      });
    },
    // Processed the click event on the list items.
    selectItem: function (e) {
      const $dropdownList = e.data.$dropdownList;
      const $formItem = e.data.$formItem;
      const $iconPickerSelected = e.data.$iconPickerSelected;
      const $listItem = $(this);

      // Remove the selected class of the previous selected item.
      $('li.selected', $dropdownList).removeClass('selected');

      // Add the selected class to the new selected item.
      $listItem.addClass('selected');

      // Get the icon id data attribute from the new selected item.
      const icon_id = $listItem.data('icon-id');

      // Set the form select element to the new value.
      $('select', $formItem).val(icon_id).change();

      // Get the new label and set it as selected in the list.
      const icon_label = $listItem.html();
      $iconPickerSelected.html(icon_label);

      // Toggle the list back to collapsed.
      $dropdownList.toggle();
    }
  };

})(jQuery, Drupal, once);
