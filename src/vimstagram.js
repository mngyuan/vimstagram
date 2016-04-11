var lastImage = -1;

$(document).ready(function() {
  $('body').on('keypress', function(e) {
    if (e.target.tagName.toLowerCase() === 'input' ||
        e.target.tagName.toLowerCase() === 'textarea') {
      return;
    }

    if (e.keyCode === 106) {
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
    } else if (e.keyCode === 107) {
      // K
      lastImage = Math.max(lastImage - 1, 0);
      $(this).animate({
        scrollTop: $('article').eq(lastImage).offset().top - 50
      }, 100);
    } else if (e.keyCode === 108) {
      // L, like
      if (lastImage == -1) { return; }
      $('.coreSpriteHeartOpen, .coreSpriteHeartFull')[lastImage].click();
    } else if (e.keyCode === 99) {
      if (lastImage == -1) { return; }
      // C, comment
      $("input[placeholder='Add a comment…']")[lastImage].focus();
      e.preventDefault();
    } else if (e.keyCode === 118) {
      if (lastImage == -1) { return; }
      // V, view all comments
      $('article').eq(0).find('button').not('.coreSpriteEllipsis').click();
    } else if (e.keyCode === 114) {
      if (lastImage == -1) { return; }
      // R, report or embed
      $('article').eq(0).find('button.coreSpriteEllipsis').click();
    } else if (e.keyCode === 117) {
      // U, undo (comment)
      $('article').eq(0).find('button[title="Delete Comment"]').last().click();
    }
  });
});
