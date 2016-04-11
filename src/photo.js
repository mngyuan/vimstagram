$(document).ready(function() {
  $('body').on('keypress', function(e) {
    if (e.target.tagName.toLowerCase() === 'input' ||
        e.target.tagName.toLowerCase() === 'textarea') {
      return;
    }

    if (e.keyCode === 108) {
      // L, like
      $('.coreSpriteHeartOpen, .coreSpriteHeartFull')[0].click();
    } else if (e.keyCode === 99) {
      // C, comment
      $("input[placeholder='Add a comment…']")[0].focus();
      e.preventDefault();
    } else if (e.keyCode === 118) {
      // V, view all comments
      $('article').eq(0).find('button').not('.coreSpriteEllipsis').click();
    } else if (e.keyCode === 114) {
      // R, report or embed
      $('article').eq(0).find('button.coreSpriteEllipsis').click();
    } else if (e.keyCode === 117) {
      // U, undo (comment)
      $('article').eq(0).find('button[title="Delete Comment"]').last().click();
    }
  });

  $("body").on('keydown', function(e) {
    if (e.keyCode === 27) {
      // ESC, to leave a comment box
      $("input[placeholder='Add a comment…']")[0].blur();
    }
  });
});
