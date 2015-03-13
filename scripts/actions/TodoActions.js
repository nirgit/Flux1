define([], function() {
	'use strict';

	function createAddAction(data) {
		return {
			type: 'addTodo',
			data: data
		};
	}

	function createRemoveAction(index) {
		return {
			type: 'removeTodo',
			data: index
		};
	}

	return {
		createAddAction: createAddAction,
		createRemoveAction: createRemoveAction
	}
});