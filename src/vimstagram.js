var lastImage = -1;

$(document).ready(function() {
  $('body').on('keydown', function(e) {
    if (e.keyCode === 74) {
      // J
      lastImage++;
      if (lastImage === $('article').length) {
        // if need to load more scroll to bottom
        lastImage--;
        $(this).animate({
          scrollTop: $(document).height()
        }, 100);
      } else {
        $(this).animate({
          scrollTop: $('article').eq(lastImage).offset().top - 50
        }, 100);
      }
    } else if (e.keyCode === 75) {
      // K
      lastImage = Math.max(lastImage - 1, 0);
      $(this).animate({
        scrollTop: $('article').eq(lastImage).offset().top - 50
      }, 100);
    } else if (e.keyCode === 76) {
      // L, like
      $('.coreSpriteHeartOpen, .coreSpriteHeartFull')[lastImage].click();
    }
  });
});
