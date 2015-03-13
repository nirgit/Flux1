define([], function() {
	'use strict';

	var todoItems = [
		'todo 1',
		'todo 2',
		'todo 3',
		'todo 4',
	];

	var changeCallbacks = [];

	function updateListeners() {
		for (var i = 0; i < changeCallbacks.length; i++) {
			changeCallbacks[i](todoItems);
		}
	}

	return {
		registerForChange: function(callback) {
			if (callback) {
				changeCallbacks.push(callback);
			}
		},
		dispatch: function(dispatchedData) {
			if (dispatchedData) {
				var action = dispatchedData.action.toLowerCase();
				var data = dispatchedData.data;

				if (action === 'add') {
					if (data) {
						todoItems.push(data);
					}
					updateListeners();
				} else if(action === 'remove') {
					todoItems.splice(data, 1);
					updateListeners();
				}
			}
		}
	};
});