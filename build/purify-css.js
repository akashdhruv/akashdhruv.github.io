var purify = require('purify-css');
require('shelljs/global');

// purify style.css
exec('jekyll build', function(code, stdout, stderr) {
});

var content = [
    '_site/index.html',
    '_site/pub/index.html',
    '_site/flash/index.html',
    '_site/mfs/index.html',
    '_site/blog/index.html',
    '_site/_layouts/posts.html',
]
var css = ['static/css/style.css']

var options = {
    output: 'static/css/style-purify.css'
};

purify(content, css, options);
