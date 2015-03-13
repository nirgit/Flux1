define(['lodash'], function(_) {
	'use strict';

	var todoItems = [];

	var changeCallbacks = [];

	function updateListeners() {
		_.each(changeCallbacks, function(listener) {
			listener(todoItems);
		});
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
						todoItems = todoItems.concat(data);
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