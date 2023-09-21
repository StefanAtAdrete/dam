/**
 * @file
 * Behaviors Bootstrap styles themes overrides scripts.
 */

(function ($, Drupal, once) {
  "use strict";

  Drupal.behaviors.bootstrapStylesThemesOverrides = {
    attach: function (context) {

      // Layout builder modal
      // @todo: we need to add this class somewhere else
      if($('#layout-builder-modal').length) {
        $(document).ajaxComplete(function() {
          $('#layout-builder-modal').parent().addClass('ui-layout-builder-modal');
        });
      }

      // Remove custom-control class from Barrio theme.
      once('bs-themes-overrides',".bs_tab-pane--appearance input[type=radio]",context).forEach(function (value,i) {
        $(value).parent().removeClass('custom-control custom-radio');
        $(value).removeClass('custom-control-input');
        $(value).next('label').removeClass('custom-control-label');
      });
    }
  };

})(jQuery, Drupal, once);
;
/**
 * @file
 * Behaviors Bootstrap styles tabs scripts.
 */

(function ($, _, Drupal, drupalSettings) {
  "use strict";

  Drupal.behaviors.bootstrapStylesTabs = {
    attach: function (context) {

      $('#bs_nav-tabs li a', context).each(function() {
        $(this).on('click', function () {
          $('#bs_nav-tabs li a', context).removeClass('active');
          $(this).toggleClass('active');
          var href = $(this).attr('data-target');
          if(href && $('#bs_tabContent').length) {
            $('.bs_tab-pane', context).removeClass('active');
            $('.bs_tab-pane--' + href, context).addClass('active');
          }
        });
      })

    }
  };

})(window.jQuery, window._, window.Drupal, window.drupalSettings);
;
/**
 * @file
 * Behaviors Bootstrap styles input scripts.
 */

(function ($, Drupal, once) {
  "use strict";

  // Adds value from input to the label to emulate a "preview" on our inputs.
  Drupal.behaviors.bootstrapStylesInputCircles = {
    attach: function (context) {
      once('bs_input-circles',".bs_input-circles input[type=radio]",context).forEach(function (value,i) {
        // Add the [key] class from the backend to our forms input element (preview our colour).
        $(value).next('label').addClass($(value).val());
      });
    }
  };

})(jQuery, Drupal, once);
;
/**
 * @file
 * Behaviors Bootstrap Layout Builder general scripts.
 */

(function ($, Drupal, once) {
  "use strict";

  // Configure Section.
  Drupal.behaviors.bootstrapLayoutBuilderConfigureSection = {
    attach: function (context) {
      // Custom solution for Bootstrap 3 Drupal theme.
      $('input.blb_container_type', context).each(function() {
        var checked = $(this).prop("checked");
        if (typeof checked !== typeof undefined && checked !== false) {
          $(this).parent('label').addClass('active');
        }
      });

      // Custom solution for Bootstrap 3 & Bario Drupal themes.
      $('.blb_container_type .fieldset-wrapper label', context).on('click', function () {
        $(this).parents('.fieldset-wrapper').find('label').removeClass('active');
        $(this).parents('.fieldset-wrapper').find('input').prop("checked", false);
        // Temp comment the following line because of conflict with live preview.
        // $(this).parent().find('input').prop('checked', true);
        $(this).addClass('active');
      });

      // Graphical Layout Columns
      $('.blb_breakpoint_cols', context).each(function () {
        const numOfCols = 12;
        // .custom-control, .custom-radio to solve Bario issues.
        once('custom-control-custom-radio-bario',$(this).find('.form-item, .custom-control, .custom-radio'),context).forEach(function (elem,i) {
          var cols = $(elem).find('input').val().replace('blb_col_', '');
          var colsConfig = cols.split('_');
          var colsLabel = $(elem).find('label');
          var col_classes = 'blb_breakpoint_col';
          var checked = $(elem).find('input').prop("checked");
          if (typeof checked !== typeof undefined && checked !== false) {
            col_classes += ' bp-selected';
          }

          // Wrap our radio labels and display as a tooltip.
          colsLabel.wrapInner('<div class="bs_tooltip bs_tooltip-lg"></div>');

          // Provide a graphical representation of the columns via some nifty divs styling.
          $.each(colsConfig, function(index, value) {
            var width = ((value / numOfCols) * 100);
            $('<div />', {
              'text': width.toFixed(0) + '%',
              'style': 'width:' + width + '%;',
              'class': col_classes,
            })
            .appendTo(colsLabel)
            .on('click', function () {
              $(this).parents('.blb_breakpoint_cols').find('.blb_breakpoint_col').removeClass('bp-selected');
              $(this).parents('.blb_breakpoint_cols').find('input').prop("checked", false);
              $(this).parents('label').parent().find('input').prop("checked", true);
              $(this).parents('label').find('.blb_breakpoint_col').addClass('bp-selected');
            });

          });
        });

      });

      // Auto-sized textareas.
      $('textarea.blb-auto-size', context).each(function() {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;min-height:60px!important;padding:.65rem 1rem;');
      });

    }
  };

})(jQuery, Drupal, once);
;
/**
 * @file
 * Behaviors shadow plugin group.
 */

(function ($, Drupal, once) {
  "use strict";
  
  // Shadow preview box.
  Drupal.behaviors.shadowPreview = {
    attach: function (context) {

      var previewElement = $('.bs-shadow-preview [data-bs-element="bs_preview-element"]');

      // Refresh preview classes.
      function refreshShadowClasses(el) {

        var shadow_classes = '';

        // Setup our shadow classes.
        $('input.bs-field-box-shadow').each(function() {
          if ($(this).is(':checked') && $(this).val() != '_none') {
            shadow_classes += $(this).val() + ' ';
          }
        });

        // Remove all classes.
        previewElement.removeClass();

        // Then add our selected class.
        previewElement.addClass(shadow_classes);
      }

      refreshShadowClasses();

      // Refresh the box shadow classes on change.
      var input_triggers = [
        'input[class^="bs-field-box-shadow"]',
      ];

      $.each(input_triggers, function (index, value) {
        $(value, context).on('change', function() {
          refreshShadowClasses();
        });
      });

      // Toggle our bg color mode.
      function togglePreviewBackgroundColor(el) {
        var previewBgElement = el.closest('[data-bs-element="bs_preview-box"]');
        previewBgElement.attr('data-bs-mode', previewBgElement.attr('data-bs-mode') === 'light' ? 'dark' : 'light');
      }

      $('.bs-shadow-preview .bs-toggle-switch', context).on('change', function() {
        togglePreviewBackgroundColor($(this));
      });

    }
  };

})(jQuery, Drupal, once);
;
/**
 * @file
 * Behaviors Border plugin layout builder form scripts.
 */

(function ($, Drupal, once) {
  "use strict";
  
  // Border.
  Drupal.behaviors.borderLayoutBuilderForm = {
    attach: function (context) {
      // The default border color.
      once('blb_border','input.bs-field-border-color', context).forEach(function (value,i) {
      var border_color = '';
        if ($(value).val() !='_none' && typeof $(value).next('label').css('border-color') != 'undefined') {
          border_color = $(value).next('label').css('border-color');
          $(value).next('label').attr('style', 'background-color: ' + border_color + ' !important; border-color: white !important;');
        }
      });

      // Assign border style.
      var directions = ['left', 'top', 'right', 'bottom'];
      // Loop through the directions.
      for (var i = 0; i < directions.length; i++) {
        once('blb_border','input.bs-field-border-style-' + directions[i], context).forEach(function (value,i) {
          var border_style = '';
          if ($(value).val() !='_none' && typeof $(value).next('label').css('border-style') != 'undefined') {
            border_style = $(value).next('label').css('border-' + directions[i] + '-style');
            $(value).next('label').css('border-style', border_style);
          }
        });

        // Switch border color to background color.
        once('blb_border','input.bs-field-border-color-' + directions[i], context).forEach(function (value,i) {
          var border_color = '';
          if ($(value).val() !='_none' && typeof $(value).next('label').css('border-color') != 'undefined') {
            border_color = $(value).next('label').css('border-' + directions[i] + '-color');
            $(value).next('label').attr('style', 'background-color: ' + border_color + ' !important; border-color: white !important;');
          }
        });

      }
    }
  };

})(jQuery, Drupal, once);
;
/**
 * @file
 * Behaviors border plugin group.
 */

(function ($, Drupal, once) {
  "use strict";
  
  // Border preview box.
  Drupal.behaviors.borderPreview = {
    attach: function (context,settings) {
      var border_width = settings.bootstrap_styles.border.border_width;
      var rounded_corners = settings.bootstrap_styles.border.rounded_corners;
      var directions = ['left', 'top', 'right', 'bottom'];
      var corners = ['top_left', 'top_right', 'bottom_left', 'bottom_right'];

      // Refresh preview Classes.
      function refreshPreviewClasses() {
        var border_classes = '';

        // Border style.
        $('input.bs-field-border-style').each(function() {
          if ($(this).is(':checked') && $(this).val() != '_none') {
            border_classes += $(this).val() + ' ';
          }
        });

        // Border width.
        var border_width_val = $('input.bs-field-border-width').val();
        var border_width_class = border_width.border_width[border_width_val];
        if (border_width_class != '_none') {
          border_classes += border_width_class + ' ';
        }

        // Border color.
        $('input.bs-field-border-color').each(function() {
          if ($(this).is(':checked') && $(this).val() != '_none') {
            border_classes += $(this).val() + ' ';
          }
        });

        // Loop through the directions.
        for (var i = 0; i < directions.length; i++) {
          // Border style.
          $('input.bs-field-border-style-' + directions[i]).each(function() {
            if ($(this).is(':checked') && $(this).val() != '_none') {
              border_classes += $(this).val() + ' ';
            }
          });

          // Border width
          border_width_val = $('input.bs-field-border-width-' + directions[i]).val();
          if (border_width_val) {
            border_width_class = border_width['border_' + directions[i] + '_width'][border_width_val];
            if (border_width_class != '_none') {
              border_classes += border_width_class + ' ';
            }
          }

          // Border color.
          $('input.bs-field-border-color-' + directions[i]).each(function() {
            if ($(this).is(':checked') && $(this).val() != '_none') { 
              border_classes += $(this).val() + ' ';
            }
          });
        }

        // Rounded corners
        var rounded_corners_val = $('input.bs-field-rounded-corners').val();
        var rounded_corners_class = rounded_corners.rounded_corners[rounded_corners_val];
        if (rounded_corners_class != '_none') {
          border_classes += rounded_corners_class + ' ';
        }

        // Loop through the corners.
        for (var i = 0; i < corners.length; i++) {
          rounded_corners_val = $('input.bs-field-rounded-corner-' + corners[i]).val();
          if (rounded_corners_val) {
            rounded_corners_class = rounded_corners['rounded_corner_' + corners[i]][rounded_corners_val];
            if (rounded_corners_class != '_none') {
              border_classes += rounded_corners_class + ' ';
            }
          }
        }

        // Remove all classes.
        $('#bs-border-preview').removeClass();
        // Then add the round corner classes.
        $('#bs-border-preview').addClass(border_classes);
      }

      refreshPreviewClasses();

      // Refresh the border classes on change.
      var input_triggers = [
        'input[class^="bs-field-border-style"]',
        'input[class^="bs-field-border-width"]',
        'input[class^="bs-field-border-color"]',
        'input[class^="bs-field-rounded-corner"]'
      ];

      $.each(input_triggers, function (index, value) {
        $(value, context).on('change', function() {
          $(this).parents('.fieldset-wrapper').addClass('style-selected');
          refreshPreviewClasses();
        });
      });
  
    }
  };

})(jQuery, Drupal, once);
;
/**
 * @file
 * Behaviors spacing plugin group.
 */

(function ($, Drupal, once) {
  "use strict";
  
  // Spacing preview box.
  Drupal.behaviors.spacingPreview = {
    attach: function (context,settings) {
      var spacing = settings.bootstrap_styles.spacing;
      var breakpoints = settings.bootstrap_styles.breakpoints;

      var padding_box_shadow = $('.spacing-preview .padding-box').css('box-shadow');
      var margin_box_shadow = $('.spacing-preview .margin-box').css('box-shadow');
      var box_shadow = '0 0 0 1.5rem';

      // Padding.
      function calcPadding() {
        var padding_val = $('input.bs-field-padding').val();
        var padding_left_val = $('input.bs-field-padding-left').val();
        var padding_top_val = $('input.bs-field-padding-top').val();
        var padding_right_val = $('input.bs-field-padding-right').val();
        var padding_bottom_val = $('input.bs-field-padding-bottom').val();
        var padding_classes = '';
        var padding_class = spacing.padding_classes_options.padding[padding_val];
        if (padding_class != '_none') {
          padding_classes += padding_class + ' ';
        }
        var padding_left_class = spacing.padding_classes_options.padding_left[padding_left_val];
        if (padding_left_class != '_none') {
          padding_classes += padding_left_class + ' ';
        }
        var padding_top_class = spacing.padding_classes_options.padding_top[padding_top_val];
        if (padding_top_class != '_none') {
          padding_classes += padding_top_class + ' ';
        }
        var padding_right_class = spacing.padding_classes_options.padding_right[padding_right_val];
        if (padding_right_class != '_none') {
          padding_classes += padding_right_class + ' ';
        }
        var padding_bottom_class = spacing.padding_classes_options.padding_bottom[padding_bottom_val];
        if (padding_bottom_class != '_none') {
          padding_classes += padding_bottom_class + ' ';
        }

        // Responsive.
        padding_classes += getActiveBreakpointPaddingClasses();

        // Remove all classes.
        $('#bs_spacing_preview_calc').removeClass();
        // Then add the padding classes.
        $('#bs_spacing_preview_calc').addClass(padding_classes);

        $('.spacing-preview .padding-left').text(parseInt($('#bs_spacing_preview_calc').css('padding-left')));
        $('.spacing-preview .padding-top').text(parseInt($('#bs_spacing_preview_calc').css('padding-top')));
        $('.spacing-preview .padding-right').text(parseInt($('#bs_spacing_preview_calc').css('padding-right')));
        $('.spacing-preview .padding-bottom').text(parseInt($('#bs_spacing_preview_calc').css('padding-bottom')));
      }

      // Responsive.
      function getActiveBreakpointPaddingClasses() {
        var padding_classes = '';
        var active_breakpoint = $('.bs_responsive_spacing input:checked').val();

        if (typeof active_breakpoint !== 'undefined') {
          var i;
          var padding_classes = '';
          for (i = 0; i < breakpoints.length; i++) {
            if (active_breakpoint == breakpoints[i]) {
              var padding_val = $('input.bs-field-padding-' + breakpoints[i]).val();
              var padding_left_val = $('input.bs-field-padding-left-' + breakpoints[i]).val();
              var padding_top_val = $('input.bs-field-padding-top-' + breakpoints[i]).val();
              var padding_right_val = $('input.bs-field-padding-right-' + breakpoints[i]).val();
              var padding_bottom_val = $('input.bs-field-padding-bottom-' + breakpoints[i]).val();
              var padding_class = spacing.padding_classes_options['padding_' + breakpoints[i]][padding_val];
              if (padding_class != '_none') {
                padding_classes += padding_class + ' ';
              }
              var padding_left_class = spacing.padding_classes_options['padding_left_' + breakpoints[i]][padding_left_val];
              if (padding_left_class != '_none') {
                padding_classes += padding_left_class + ' ';
              }
              var padding_top_class = spacing.padding_classes_options['padding_top_' + breakpoints[i]][padding_top_val];
              if (padding_top_class != '_none') {
                padding_classes += padding_top_class + ' ';
              }
              var padding_right_class = spacing.padding_classes_options['padding_right_' + breakpoints[i]][padding_right_val];
              if (padding_right_class != '_none') {
                padding_classes += padding_right_class + ' ';
              }
              var padding_bottom_class = spacing.padding_classes_options['padding_bottom_' + breakpoints[i]][padding_bottom_val];
              if (padding_bottom_class != '_none') {
                padding_classes += padding_bottom_class + ' ';
              }
            }
          }
        }

        return padding_classes;
      }

      // Margin.
      function calcMargin() {
        var margin_val = $('input.bs-field-margin').val();
        var margin_left_val = $('input.bs-field-margin-left').val();
        var margin_top_val = $('input.bs-field-margin-top').val();
        var margin_right_val = $('input.bs-field-margin-right').val();
        var margin_bottom_val = $('input.bs-field-margin-bottom').val();

        var margin_classes = '';
        var margin_class = spacing.margin_classes_options.margin[margin_val];
        if (margin_class != '_none') {
          margin_classes += margin_class + ' ';
        }
        var margin_left_class = spacing.margin_classes_options.margin_left[margin_left_val];
        if (margin_left_class != '_none') {
          margin_classes += margin_left_class + ' ';
        }
        var margin_top_class = spacing.margin_classes_options.margin_top[margin_top_val];
        if (margin_top_class != '_none') {
          margin_classes += margin_top_class + ' ';
        }
        var margin_right_class = spacing.margin_classes_options.margin_right[margin_right_val];
        if (margin_right_class != '_none') {
          margin_classes += margin_right_class + ' ';
        }
        var margin_bottom_class = spacing.margin_classes_options.margin_bottom[margin_bottom_val];
        if (margin_bottom_class != '_none') {
          margin_classes += margin_bottom_class + ' ';
        }

        // Remove all classes.
        $('#bs_spacing_preview_calc').removeClass();
        // Then add the margin classes.
        $('#bs_spacing_preview_calc').addClass(margin_classes);

        $('.spacing-preview .margin-left').text(parseInt($('#bs_spacing_preview_calc').css('margin-left')));
        $('.spacing-preview .margin-top').text(parseInt($('#bs_spacing_preview_calc').css('margin-top')));
        $('.spacing-preview .margin-right').text(parseInt($('#bs_spacing_preview_calc').css('margin-right')));
        $('.spacing-preview .margin-bottom').text(parseInt($('#bs_spacing_preview_calc').css('margin-bottom')));
      }

      // Calculate the padding on load.
      calcPadding();
      // Calculate the margin on load.
      calcMargin();

      // Padding Actions
      // Calculate the padding on change.
      $('input[class^="bs-field-padding"], .bs_responsive_spacing input', context).on('change', function() {
        calcPadding();
      });

      // On focus, gray out margin box so we can "focus" on changing padding values.
      $('input[class^="bs-field-padding"]', context).on('focus', function() {
        var panel_bg = $(this).parents('details').find('summary').css('background-color');
        var inactive_box_shadow = box_shadow + ' ' + panel_bg;
        $('.spacing-preview .margin-box').css('box-shadow', inactive_box_shadow);
        $('.spacing-preview .padding-box').addClass('bs-adjusting');
      });

      // On focusout, turn it back to our original colour.
      $('input[class^="bs-field-padding"]', context).on('focusout', function() {
        $('.spacing-preview .margin-box').css('box-shadow', margin_box_shadow);
        $('.spacing-preview .padding-box').removeClass('bs-adjusting');
      });


      // Margin Actions
      // Calculate the margin on change.
      $('input[class^="bs-field-margin"]', context).on('change', function() {
        calcMargin();
      });

      // On focus, gray out margin box so we can "focus" on changing padding values.
      $('input[class^="bs-field-margin"]', context).on('focus', function() {
        var panel_bg = $(this).parents('details').find('summary').css('background-color');
        var inactive_box_shadow = box_shadow + ' ' + panel_bg;
        $('.spacing-preview .padding-box').css('box-shadow', inactive_box_shadow);
        $('.spacing-preview .margin-box').addClass('bs-adjusting');
      });

      // On focusout, turn it back to our original colour.
      $('input[class^="bs-field-margin"]', context).on('focusout', function() {
        $('.spacing-preview .padding-box').css('box-shadow', padding_box_shadow);
        $('.spacing-preview .margin-box').removeClass('bs-adjusting');
      });


    }
  };

})(jQuery, Drupal, once);
;
// Function to convert hex format to a rgb color
function rgb2hex(orig) {
  var rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;
}

/*!
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 * @param  {String} A hexcolor value
 * @return {String} The contrasting color (black or white)
 */
var getContrast = function (hexcolor) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor.split('').map(function (hex) {
      return hex + hex;
    }).join('');
  }

  // Convert to RGB value
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  // Check contrast
  return (yiq >= 128) ? 'dark' : 'light';
};;
/**
 * @file
 * Behaviors Text Color plugin layout builder form scripts.
 */

(function ($, Drupal, once) {
  "use strict";
  
  // Text color.
  Drupal.behaviors.textColorLayoutBuilderForm = {
    attach: function (context) {

      once('blb_text-color',".fieldgroup.field-text-color input[type=radio]", context).forEach(function (value,i) {
        $(value).next('label').addClass($(value).val());

        // Attach the color as a background color to the label AFTER adding the class.
        if($(value).val() != '_none') {
          var label_color = $(value).next('label').css('color');
          $(value).next('label').css('background-color', label_color);

          // Set a contrast class so we can see our checkmarks on light vs. dark backgrounds.
          var bgColor = $(value).next('label').css('background-color');
          var bgColorHex = rgb2hex(bgColor);
          var bgColorContrast = getContrast(bgColorHex);
          $(value).next('label').addClass('bs_yiq-' + bgColorContrast);
        }
      });

      $(".fieldgroup.field-text-color .fieldset-wrapper label", context).on('click', function () {

        $(this).parents('.fieldset-wrapper').find('label').removeClass('active');
        // Temp comment the following line because of conflict with live preview.
        // $(this).parents('.fieldset-wrapper').addClass('style-selected').find('input').prop("checked", false);
        // $(this).parent().find('input').prop('checked', true);

        if($(this).hasClass('_none')) {
          $(this).parents('.fieldset-wrapper').removeClass('style-selected');
        }
      });

      // Custom solution for bootstrap 3 & Bario drupal theme issues.
      $(".fieldgroup.field-text-color .fieldset-wrapper input:radio", context).each(function () {
        $(this).closest('.radio').find('label').addClass($(this).val());
        var checked = $(this).prop("checked");
        if (typeof checked !== typeof undefined && checked !== false) {
          $(this).closest('.radio').find('label').addClass('active');
        }
      });
    }
  };

})(jQuery, Drupal, once);
;
/**
 * @file
 * Behaviors Background Color plugin layout builder form scripts.
 */

(function ($, Drupal, once) {
  "use strict";
  
  // Background color.
  Drupal.behaviors.backgroundColorLayoutBuilderForm = {
    attach: function (context) {

      once('blb_bg-color',".fieldgroup.field-background-color input[type=radio]", context).forEach(function (value,i) {
        if($(value).val() != '_none') {
          $(value).next('label').addClass($(value).val());

          // Set a contrast class so we can see our checkmarks on light vs. dark backgrounds.s.
          var bgColor = $(value).next('label').css('background-color');
          var bgColorHex = rgb2hex(bgColor);
          var bgColorContrast = getContrast(bgColorHex);
          $(value).next('label').addClass('bs_yiq-' + bgColorContrast);
        }
      });

      $(".fieldgroup.field-background-color .fieldset-wrapper label", context).on('click', function () {
        $(this).parents('.fieldset-wrapper').find('label').removeClass('active');
        $(this).parents('.fieldset-wrapper').addClass('style-selected').find('input').prop("checked", false);
        // Temp comment the following line because of conflict with live preview.
        // $(this).parent().find('input').prop('checked', true);

        if($(this).hasClass('_none')) {
          $(this).parents('.fieldset-wrapper').removeClass('style-selected');
        }
      });

      // Custom solution for bootstrap 3 & Bario drupal theme issues.
      $(".fieldgroup.field-background-color .fieldset-wrapper input:radio", context).each(function () {
        $(this).closest('.radio').find('label').addClass($(this).val());
        var checked = $(this).prop("checked");
        if (typeof checked !== typeof undefined && checked !== false) {
          $(this).closest('.radio').find('label').addClass('active');
        }
      });
    }
  };

})(jQuery, Drupal, once);
;
"use strict";

/**
 * @file media_library.form-element.js
 */
(function ($, Drupal, Sortable) {
  "use strict";
  /**
   * Allow users to edit media library items inside a modal.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches behavior to allow editing of a media library item.
   */

  Drupal.behaviors.MediaLibraryFormElementEditItem = {
    attach: function attach(context) {
      var itemSelector = '.media-library-form-element .js-media-library-item a[href]';
      $(once('media-library-edit', itemSelector, context)).each(function (index) {
        var elementSettings = {
          progress: {
            type: "throbber"
          },
          dialogType: "modal",
          dialog: {
            width: "80%"
          },
          dialogRenderer: null,
          base: $(this).attr("id"),
          element: this,
          url: $(this).attr("href"),
          event: "click"
        };
        Drupal.ajax(elementSettings);
      });
    }
  };
  /**
   * Disable the open button when the user is not allowed to add more items.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches behavior to disable the media library open button.
   */

  Drupal.behaviors.MediaLibraryFormElementDisableButton = {
    attach: function attach(context) {
      // When the user returns from the modal to the widget, we want to shift
      // the focus back to the open button. If the user is not allowed to add
      // more items, the button needs to be disabled. Since we can't shift the
      // focus to disabled elements, the focus is set back to the open button
      // via JavaScript by adding the 'data-disabled-focus' attribute.
      var itemSelector = '.js-media-library-open-button[data-disabled-focus="true"]';
      $(once('media-library-disable', itemSelector, context)).each(function (index) {
        var _this = this;

        $(this).focus(); // There is a small delay between the focus set by the browser and the
        // focus of screen readers. We need to give screen readers time to
        // shift the focus as well before the button is disabled.

        setTimeout(function () {
          $(_this).attr("disabled", "disabled");
        }, 50);
      });
    }
  };
  /**
   * Allows selection order to be set without drag+drop for accessibility.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches behavior to toggle the weight field for media items.
   */

  Drupal.behaviors.MediaLibraryFormElementToggleWeight = {
    attach: function attach(context) {
      var strings = {
        show: Drupal.t("Show media item weights"),
        hide: Drupal.t("Hide media item weights")
      };
      $(once('media-library-toggle', '.js-media-library-widget-toggle-weight', context)).each(function (index) {
        $(this).on('click', function (e) {
          e.preventDefault();
          $(e.currentTarget).toggleClass('active').text($(e.currentTarget).hasClass('active') ? strings.hide : strings.show).closest('.js-media-library-widget').find('.js-media-library-item-weight').parent().toggle();
        }).text(strings.show);
      });
      $(once('media-library-toggle', '.js-media-library-item-weight', context)).each(function (index) {
        $(this).parent().hide();
      });
    }
  };
  /**
   * Allows users to re-order their selection with drag+drop.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches behavior to re-order selected media items.
   */

  Drupal.behaviors.MediaLibraryFormElementSortable = {
    attach: function attach(context) {
      // Allow media items to be re-sorted with drag+drop in the widget.
      var selection = context.querySelectorAll(".js-media-library-selection");
      selection.forEach(function (widget) {
        Sortable.create(widget, {
          draggable: ".js-media-library-item",
          handle: ".js-media-library-item-preview",
          onEnd: function onEnd() {
            $(widget).children().each(function (index, child) {
              $(child).find(".js-media-library-item-weight").val(index);
            });
          }
        });
      });
    }
  };
  /**
   * Updates the selected media items field with the provided data.
   *
   * @param {string} data
   *  The data to append to the selection.
   * @param {string} element
   *  The element which contains the media items ids.
   */

  $.fn.setMediaUploadFieldValue = function (data, element) {
    var currentValue = $(element).val();
    $(element).val("".concat(currentValue).concat(currentValue === "" ? "" : ",").concat(data));
  };
})(jQuery, Drupal, Sortable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.theme.checkbox = function () {
    return "<input type=\"checkbox\" class=\"form-checkbox\"/>";
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.theme.checkbox = function () {
    return '<input type="checkbox" class="form-checkbox form-boolean form-boolean--type-checkbox"/>';
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.ClickToSelect = {
    attach: function attach(context) {
      $(once('media-library-click-to-select', '.js-click-to-select-trigger', context)).on('click', function (event) {
        event.preventDefault();
        var $input = $(event.currentTarget).closest('.js-click-to-select').find('.js-click-to-select-checkbox input');
        $input.prop('checked', !$input.prop('checked')).trigger('change');
      });
      $(once('media-library-click-to-select', '.js-click-to-select-checkbox input', context)).on('change', function (_ref) {
        var currentTarget = _ref.currentTarget;
        $(currentTarget).closest('.js-click-to-select').toggleClass('checked', $(currentTarget).prop('checked'));
      }).on('focus blur', function (_ref2) {
        var currentTarget = _ref2.currentTarget,
          type = _ref2.type;
        $(currentTarget).closest('.js-click-to-select').toggleClass('is-focus', type === 'focus');
      });
      $(once('media-library-click-to-select-hover', '.js-click-to-select-trigger, .js-click-to-select-checkbox', context)).on('mouseover mouseout', function (_ref3) {
        var currentTarget = _ref3.currentTarget,
          type = _ref3.type;
        $(currentTarget).closest('.js-click-to-select').toggleClass('is-hover', type === 'mouseover');
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.MediaLibrarySelectAll = {
    attach: function attach(context) {
      var $view = $(once('media-library-select-all', '.js-media-library-view[data-view-display-id="page"]', context));
      if ($view.length && $view.find('.js-media-library-item').length) {
        var $checkbox = $(Drupal.theme('checkbox')).on('click', function (_ref) {
          var currentTarget = _ref.currentTarget;
          var $checkboxes = $(currentTarget).closest('.js-media-library-view').find('.js-media-library-item input[type="checkbox"]');
          $checkboxes.prop('checked', $(currentTarget).prop('checked')).trigger('change');
          var announcement = $(currentTarget).prop('checked') ? Drupal.t('All @count items selected', {
            '@count': $checkboxes.length
          }) : Drupal.t('Zero items selected');
          Drupal.announce(announcement);
        });
        var $label = $('<label class="media-library-select-all"></label>');
        $label[0].textContent = Drupal.t('Select all media');
        $label.prepend($checkbox);
        $view.find('.js-media-library-item').first().before($label);
      }
    }
  };
})(jQuery, Drupal);;
/**
 * @file
 * Paragraphs actions JS code for paragraphs actions button.
 */

(function ($, Drupal, once) {

  'use strict';

  /**
   * Process paragraph_actions elements.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches paragraphsActions behaviors.
   */
  Drupal.behaviors.paragraphsActions = {
    attach: function (context, settings) {
      var $actionsElement = $(once('paragraphs-dropdown', '.paragraphs-dropdown', context));
      // Attach event handlers to toggle button.
      $actionsElement.each(function () {
        var $this = $(this);
        var $toggle = $this.find('.paragraphs-dropdown-toggle');

        $toggle.on('click', function (e) {
          e.preventDefault();
          $this.toggleClass('open');
        });

        $this.on('focusout', function (e) {
          setTimeout(function () {
            if ($this.has(document.activeElement).length == 0) {
              // The focus left the action button group, hide actions.
              $this.removeClass('open');
            }
          }, 1);
        });
      });
    }
  };

})(jQuery, Drupal, once);
;