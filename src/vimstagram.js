var lastImage = -1;

function goToPost(i) {
  $('body').animate({
    scrollTop: $('article').eq(i).offset().top - 50
  }, 100);
}

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
        goToPost(lastImage);
      }
    } else if (e.keyCode === 107) {
      // K
      lastImage = Math.max(lastImage - 1, 0);
      goToPost(lastImage);
    } else if (e.keyCode === 108) {
      // L, like
      if (lastImage == -1) { return; }
      $('.coreSpriteHeartOpen, .coreSpriteHeartFull')[lastImage].click();
    } else if (e.keyCode === 115) {
      // S, search
      $("input[placeholder='Search']").focus();
      e.preventDefault();
    } else if (e.keyCode === 99) {
      if (lastImage == -1) { return; }
      // C, comment
      $("input[placeholder='Add a comment…']")[lastImage].focus();
      e.preventDefault();
    } else if (e.keyCode === 118) {
      if (lastImage == -1) { return; }
      // V, view all comments
      $('article').eq(lastImage).find('button').not('.coreSpriteEllipsis').click();
    } else if (e.keyCode === 114) {
      if (lastImage == -1) { return; }
      // R, report or embed
      $('article').eq(lastImage).find('button.coreSpriteEllipsis').click();
    } else if (e.keyCode === 117) {
      // U, undo (comment)
      $('article').eq(lastImage).find('button[title="Delete Comment"]').last().click();
    }
  });

  $("body").on('keydown', function(e) {
    if (e.keyCode === 27) {
      // ESC, to leave a comment box or search box
      if ($("input[placeholder='Search']").is(':focus')) {
        $("input[placeholder='Search']").blur();
        goToPost(lastImage);
      } else {
        $("input[placeholder='Add a comment…']")[lastImage].blur();
      }
    }
  });
});
