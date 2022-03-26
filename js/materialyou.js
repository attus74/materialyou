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
        if ($menu.hasClass('materialyou-menu-open')) {
          $menu.removeClass('materialyou-menu-open');
        }
        else {
          $menu.addClass('materialyou-menu-open');
        }
      });
      jQuery(this).addClass('materialyou-initialized');
    });
  }
};