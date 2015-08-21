var Elm = require('./Three.elm');

window.Three = function(node) {
	Elm.embed(Elm.Three, node);
}
