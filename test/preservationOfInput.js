
var testCase = require('tap').test;
var m = require('hyperscript');
var html2hs = require('../');

var html = `
<table class="sample-html">
  <tr>
    <th>Pandas</th>
    <th>Kittens</th>
    <th>Hedgehogs</th>
  </tr>
  <tr>
    <td>foo</td>
    <td>bar</td>
    <td>baz</td>
  </tr>
  <tr>
    <td>32</td>
    <td>45</td>
    <td>83</td>
  </tr>
  <tr>
    <td>onomatopoeia</td>
    <td>schadenfreude</td>
    <td>antidisestablishmentarianism</td>
  </tr>
</table>`;

var hs = `
m("table.sample-html", [
  m("tr", [
    m("th", "Pandas"),
    m("th", "Kittens"),
    m("th", "Hedgehogs")
  ]),
  m("tr", [
    m("td", "foo"),
    m("td", "bar"),
    m("td", "baz")
  ]),
  m("tr", [
    m("td", "32"),
    m("td", "45"),
    m("td", "83")
  ]),
  m("tr", [
    m("td", "onomatopoeia"),
    m("td", "schadenfreude"),
    m("td", "antidisestablishmentarianism")
  ])
])`;

testCase(function (test) {
    test.equal(html2hs('<div><!-- comment body --></div>'), 'm("div", /* comment body */)', 'preserve comments');
    test.equal(html2hs("<div>\n\n</div>"), "m(\"div\", [\n\n])", 'preserve newlines');
    test.equal(html2hs("<div>\n  <span></span>  \n</div>"), "m(\"div\", [\n  m(\"span\")  \n])", 'preserve indentation and whitespace');
    test.equal(html2hs("<div>\n  Some Text  \n</div>"), "m(\"div\", [\n  \"Some Text\"\n])", 'trim whitespace around text but preserve indent');
    test.equal(html2hs(html), hs, 'only use brackets when necessary');
    test.end();
});
