define(['stores/TodoStore'], function(TodoStore) {
	'use strict';

	function dispatch(action) {
		if (action && action.type) {
			TodoStore.dispatch(action);
		}
	}

	return {
		dispatch: dispatch
	};
});