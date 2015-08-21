var Elm = require('./One.elm');

window.EntryOne = function(node) {
	Elm.embed(Elm.One, node);
}
