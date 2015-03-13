define(['todo/TodoStore'], function(TodoStore) {
	'use strict';

	function dispatch(action) {
		if (action && action.type) {
			switch(action.type) {
				case 'addTodo': {
					TodoStore.dispatch({action: 'add', data: action.data});
					break;
				}
				case 'removeTodo': {
					TodoStore.dispatch({action: 'remove', data: action.data});
					break;
				}
				default: break;
			}
		}
	}

	return {
		dispatch: dispatch
	};
});