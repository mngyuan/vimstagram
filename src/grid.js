var gridLoc = -1;

function handleKeypressGrid(e) {
  if (e.target.tagName.toLowerCase() === 'input' ||
      e.target.tagName.toLowerCase() === 'textarea') {
    return;
  }

  var inLightbox = $('div[role="dialog"]').length;
  if (!inLightbox) {
    if (e.keyCode === 106 ||
        e.keyCode === 107 ||
        e.keyCode === 108 ||
        e.keyCode === 104) {
      if (gridLoc === -1) {
        // movement initializes movement
        gridLoc = 0;
      } else {
        $('._ovg3g').eq(gridLoc).toggleClass('vim-focused');

        if (e.keyCode === 106) {
          // J
          gridLoc += 3;
        } else if (e.keyCode === 107) {
          // K
          gridLoc = Math.max(gridLoc - 3, 0);
        } else if (e.keyCode === 108) {
          // L, right
          gridLoc++;
        } else if (e.keyCode === 104) {
          // H, left
          gridLoc--;
        }
      }

      $(this).animate({
        scrollTop: $('._ovg3g').eq(gridLoc).offset().top - 50
      }, 100);
      $('._ovg3g').eq(gridLoc).toggleClass('vim-focused');
    }
  } else {
    if (e.keyCode === 106 || e.keyCode === 108) {
      // J next
      $('.coreSpriteRightPaginationArrow')[0].click();
    } else if (e.keyCode === 107 || e.keyCode === 104) {
      // H or K for prev
      $('.coreSpriteLeftPaginationArrow')[0].click();
    } else if (e.keyCode === 108) {
      // L for like
      $('.coreSpriteHeartOpen, .coreSpriteHeartFull')[0].click();
    } else if (e.keyCode === 99) {
      // C, comment
      $("input[placeholder='Add a comment…']")[lastImage].focus();
      e.preventDefault();
    } else if (e.keyCode === 118) {
      // V, view all comments
      $('div[role="dialog"]').eq(0).find('button:contains("view all")').click();
    } else if (e.keyCode === 114) {
      // R, report or embed
      $('article').eq(0).find('button.coreSpriteEllipsis').click();
    } else if (e.keyCode === 117) {
      // U, undo (comment)
      $('article').eq(0).find('button[title="Delete Comment"]').last().click();
    }
  }

  if (e.keyCode === 13) {
    $('._ovg3g').eq(gridLoc).click();
  }
}

function handleKeydownGrid(e) {

}

function gridReset() {
  gridLoc = -1;
}
