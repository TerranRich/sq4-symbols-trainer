var symbols = ['a', 'c', 'd', 'e', 'h', 'i', 'j', 'l', 'n', 'p', 'r', 's', 't', 'u', 'y'];

function getRandInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(function() {
  // Randomize! button
  $('button.randomize').on('click', function() {
    // Generate 6 random characters
    for (i = 0; i < 6; i++) {
      $('img.symbol[data-index=' + i + ']').prop('src', 'images/' + symbols[getRandInt(symbols.length)] + '.png');
    }
  });
});
