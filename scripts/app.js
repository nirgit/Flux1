define(['react', 'todo/TodoAppView', 'dispatcher/dispatcher'], function(React, todoApp, dispatcher) {
	'use strict';

	var main = document.getElementById('main');
	React.render(React.createElement(todoApp, null), main);

	dispatcher.dispatch({type: 'addTodo', data: null});
});