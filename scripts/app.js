define([], function() {
	'use strict';

	var el = document.createElement('div');
	el.innerHTML = "[" + (new Date()) + "]" + "Hello Flux"
	window.document.body.appendChild(el);
});