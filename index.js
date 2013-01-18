
var npmcss = require('npm-css');

module.exports = function(opt) {
    var cssfile = opt;

    return function(req, res, next) {
        res.setHeader('Content-Type', 'text/css');

        var src = npmcss(cssfile);
        res.end(src);
    };
};

