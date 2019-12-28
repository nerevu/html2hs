
var testCase = require('tap').test;
var m = require('hyperscript');
var html2hs = require('../');

function executeJSMarkup(js) {
    var jsRunner = new Function('m', 'return ' + js);
    return jsRunner(m).outerHTML;
}

testCase(function (test) {
    var html = '<div class="testClass"><a>Some Text</a></div>';
    test.equal(executeJSMarkup(html2hs(html)), html, 'class name');
    test.end();
});

testCase(function (test) {
    var html = '<div my-attribute="attr-value" some="thing"></div>';
    test.equal(executeJSMarkup(html2hs(html)), html, 'attributes');
    test.end();
});

testCase(function (test) {
    var html = '<div id=""></div>';
    test.equal(executeJSMarkup(html2hs(html)), html, 'null ID');
    test.end();
});

testCase(function (test) {
    var html = '<table class="sample-html"><tr><th>Pandas</th><th>Kittens</th><th>Hedgehogs</th></tr><tr><td>foo</td><td>bar</td><td>baz</td></tr><tr><td>32</td><td>45</td><td>83</td></tr><tr><td>onomatopoeia</td><td>schadenfreude</td><td>antidisestablishmentarianism</td></tr></table>';
    test.equal(executeJSMarkup(html2hs(html)), html, 'only use brackets when necessary');
    test.end();
});
