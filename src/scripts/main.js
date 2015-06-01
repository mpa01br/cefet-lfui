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
    markdown = require('bespoke-meta-markdown'),
    backdrop = require('bespoke-backdrop'),
    tutorial = require('./tutorial'),
    easter = require('./easter'),
    gifs = require('./stoppable-gifs');


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
  markdown({
    backdrop: function(slide, value) {
      slide.setAttribute('data-bespoke-backdrop', value);
    }
  }),
  fancy(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  //scale(),
  hash(),
  progress(),
  state(),
  backdrop(),
  tutorial(document.getElementsByClassName('tutorial')[0], 10)
]);

easter();
gifs();