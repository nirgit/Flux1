define(['lodash', 'stores/TodoStore'], function(_, TodoStore) {
	'use strict';

	var actionTypeToStores = {
		'todo': [TodoStore]
	};

	function dispatch(action) {
		if (action && action.type) {
			var stores = actionTypeToStores[action.type];
			_.each(stores, function(store) {
				store.dispatch(action);				
			});
		}
	}

	return {
		dispatch: dispatch
	};
});