var lastImage = -1;

$(document).ready(function() {
  $('body').on('keydown', function(e) {
    if (e.keyCode === 74) {
      // J
      // TODO: click loadmore and decipher the anti click() magic
      lastImage = Math.min(lastImage + 1, $('article').length - 1);

      $(this).animate({
        scrollTop: $('article').eq(lastImage).offset().top - 50
      });
    } else if (e.keyCode === 75) {
      // K
      lastImage = Math.max(lastImage - 1, 0);
      $(this).animate({
        scrollTop: $('article').eq(lastImage).offset().top - 50
      });
    } else if (e.keyCode === 76) {
      // TODO: L, like
    }
  });
});
