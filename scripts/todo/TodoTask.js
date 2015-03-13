define(['react', 'dispatcher/dispatcher', 'actions/TodoActions',
	'todo/TodoTask.rt'], function(React, dispatcher, TodoActions, template) {
	'use strict';

	return React.createClass({
		displayName: 'TodoTask',
		removeTask: function() {
			var removeAction = TodoActions.createRemoveAction(this.props.id);
			dispatcher.dispatch(removeAction);
		},
		render: template
	});
});