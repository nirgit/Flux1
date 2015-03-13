define(['react', 'todo/TodoAppView', 
	'dispatcher/dispatcher', 'actions/TodoActions'], function(React, todoApp, dispatcher, todoActions) {
	'use strict';

	var main = document.getElementById('main');
	React.render(React.createElement(todoApp, null), main);

	var addAction = todoActions.createAddAction(['First Todo task']);
	dispatcher.dispatch(addAction);
});