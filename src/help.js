var hotkeys = {
  j: "next post",
  k: "prev post",
  l: "like",
  c: "comment",
  v: "view more comments",
  r: "moRe or report",
  u: "delete last comment"
}

$(document).ready(function() {
  var elem = `<div id='vimstagram_help'><table>\n`;
  for (var k in hotkeys) {
    elem += `<tr><td>${k}</td><td>${hotkeys[k]}</td></tr>\n`;
  }
  elem += `</table></div>`;

  $('body').append(elem);
});
