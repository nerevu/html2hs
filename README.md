[![Build Status](https://travis-ci.org/nerevu/html2hs.svg?branch=master)](https://travis-ci.org/unframework/html2hs)

# Convert Legacy HTML to Hyperscript

Automatically translate old HTML markup into the new Hyperscript markup embeddable directly inside your component Javascript code.

Use this for hand-converting legacy project source code (e.g. AngularJS templates): care is taken to preserve original whitespace and even comments. For dynamic serving and CI builds check out https://github.com/alexmingoia/jsx-transform instead.

```
npm install -g @nerevu/html2hs
html2hs file.html [file2.html ...]
cat file.html | html2hs
```

See Hyperscript library: https://github.com/dominictarr/hyperscript

Also useful for virtual DOM Hyperscript-like syntax: https://github.com/Matt-Esch/virtual-dom

HTML goes in:

```html
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
</table>
```

Hyperscript-like JS syntax comes out:

```js
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
])
```
