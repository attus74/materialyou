/**
 * Material You JS
 * 
 * @author Attila Németh
 * @date 18.03.2022
 */

jQuery(document).ready(() => {
  jQuery(document).scroll(() => {
    if(jQuery('body:not(.toolbar-fixed)').length > 0) {
      if (jQuery(document).scrollTop() >= 39) {
        jQuery('body').addClass('materialyou-top-app-bar-fixed');
      }
      else {
        jQuery('body').removeClass('materialyou-top-app-bar-fixed');
      }
    }
    if (jQuery(document).scrollTop() > 0) {
      jQuery('header.materialyou-top-app-bar').addClass('document-scrolled');
    }
    else {
      jQuery('header.materialyou-top-app-bar').removeClass('document-scrolled');
    }
  });
  var $topAppBar = jQuery('header.materialyou-top-app-bar');
  if ($topAppBar.length > 0) {
    jQuery('body').addClass('materialyou-has-top-app-bar');
  }
  else {
    jQuery('body').addClass('materialyou-not-top-app-bar');
  }
});