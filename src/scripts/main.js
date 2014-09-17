// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
    fancy = require('bespoke-theme-fancy'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    bullets = require('bespoke-bullets'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    progress = require('bespoke-progress'),
    state = require('bespoke-state'),
    markdown = require('bespoke-markdown');

var presentationEl = document.getElementById('presentation-slide'),
    queryString = document.location.search,
    queryStringMatches,
    requestedPresentation;

if (queryString && presentationEl) {
  queryStringMatches = /p=([^&#]*)/.exec(queryString);
  requestedPresentation = queryStringMatches[1];
  if (!!requestedPresentation) {
    presentationEl.setAttribute('data-markdown', requestedPresentation);
  }
}

// Bespoke.js
bespoke.from('article', [
  markdown(),
  fancy(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  //scale(),
  hash(),
  progress(),
  state()
]);
