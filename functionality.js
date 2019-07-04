// random color when hover
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    $('.welcome').css('color', color);
    $('.facts-me').css('color', color);
    $('.ideal').css('color', color);
}

// add maps api here