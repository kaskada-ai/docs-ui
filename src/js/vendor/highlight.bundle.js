;(function () {
  'use strict'

  var hljs = require('highlight.js/lib/index')
  hljs.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'))
  hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
  hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
  hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'))
  hljs.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'))
  hljs.registerLanguage('fenl', require('highlight.js/lib/languages/fenl'))
  hljs.registerLanguage('go', require('highlight.js/lib/languages/go'))
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
  hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
  hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
  hljs.registerLanguage('none', require('highlight.js/lib/languages/plaintext'))
  hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
  hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'))
  hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
  hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
  hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))
  ;[].slice.call(document.querySelectorAll('pre code.hljs')).forEach(function (node) {
    hljs.highlightBlock(node)
  })
})()
