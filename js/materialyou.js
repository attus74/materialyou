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