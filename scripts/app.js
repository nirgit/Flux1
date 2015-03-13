define(['react', 'todo/TodoAppView'], function(React, todoApp) {
	'use strict';

	var main = document.getElementById('main');
	React.render(React.createElement(todoApp, null), main);
});