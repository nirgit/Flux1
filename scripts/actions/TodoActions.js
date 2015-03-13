define([], function() {
	'use strict';

	var ACTION_TYPE = 'todo';

	function createAddAction(data) {
		return {
			type: ACTION_TYPE,
			action: 'add',
			data: data
		};
	}

	function createRemoveAction(index) {
		return {
			type: ACTION_TYPE,
			action: 'remove',
			data: index
		};
	}

	return {
		createAddAction: createAddAction,
		createRemoveAction: createRemoveAction
	}
});