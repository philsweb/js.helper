var jsHelper = {};

jsHelper.round = function (value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

jsHelper.getRandomColor = function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

jsHelper.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};