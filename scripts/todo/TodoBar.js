define(['react', 'dispatcher/dispatcher', 'actions/TodoActions',
	'todo/TodoBar.rt'], function(React, dispatcher, TodoActions, template) {
	return React.createClass({
		displayName: 'TodoBar',
		mixins: [React.addons.LinkedStateMixin],
		getInitialState: function() {
			return {
				todoTask: 'say hello'
			};
		},
		addTodo: function() {
			if (!!this.state.todoTask) {
				var action = TodoActions.createAddAction(this.state.todoTask);
				dispatcher.dispatch(action);
				this.setState({todoTask: null});
			}
			this.refs.todoDescription.getDOMNode().focus();
		},
		render: template
	});
});