/**
 * Material You JS
 * 
 * @author Attila Németh
 * @date 18.03.2022
 */

jQuery(document).ready(() => {
  jQuery(document).scroll(() => {
    if (jQuery(document).scrollTop() > 0) {
      jQuery('body').addClass('document-scrolled');
    }
    else {
      jQuery('body').removeClass('document-scrolled');
    }
    if (jQuery(document).scrollTop() > 39) {
      jQuery('body').addClass('document-scrolled-beyond-bar');
    }
    else {
      jQuery('body').removeClass('document-scrolled-beyond-bar');
    }
  });
});

Drupal.behaviors.materialYou = {
  attach: function (context, settings) {
    jQuery('nav').not('.materialyou-initialized').each(function() {
      jQuery(this).find('.materialyou-menu-button').click(function() {
        var $menu = jQuery(this).parent('nav').find('ul.menu');
        var $header = jQuery(this).parents('header.materialyou-top-app-bar');
        if ($menu.hasClass('materialyou-menu-open')) {
          $menu.removeClass('materialyou-menu-open');
          $header.removeClass('header-overflow');
        }
        else {
          $menu.addClass('materialyou-menu-open');
          $header.addClass('header-overflow');
        }
      });
      jQuery(this).addClass('materialyou-initialized');
    });
    jQuery('.materialyou-form-element').each(function() {
      jQuery(this).materialYouInput();
    });
  }
};

jQuery.fn.materialYouInput = function() {
  var $element = jQuery(this);
  $element.addClass('processing');
  var $input;
  if ($element.find('input').length > 0) {
    $input = $element.find('input');
  }
  else if ($element.find('select').length > 0) {
    $input = $element.find('select');
  }
  else if ($element.find('textarea').length > 0) {
    $input = $element.find('textarea');
  }
  console.debug($input);
  if (!$element.hasClass('processed')) {
    $input.focus(() => $element.addClass('focused'));
    $input.blur(() => $element.removeClass('focused'));
    $input.focusout(() => $element.removeClass('focused'));
    $input.change(() => $element.materialYouInput());
  }
  if ($input.val() === '' || $input.val() === null) {
    $element.addClass('empty');
  }
  else {
    $element.removeClass('empty');
  }
  $element.addClass('processed');
  $element.removeClass('processing');
};