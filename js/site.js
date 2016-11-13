(function($) {
    $.fn.uniformHeight = function() {
        var maxHeight   = 0,
            max         = Math.max;

        return this.each(function() {
            maxHeight = max(maxHeight, $(this).height());
        }).height(maxHeight);
    }
})(jQuery);


/* Make project thumbnails and images inside them the same height */
$(function() {
  $('#projects').find('.thumbnail').uniformHeight();
  $('#projects').find('img').uniformHeight();
});