define(['react', 'stores/TodoStore'], function(React, TodoStore) {
	'use strict';

	return React.createClass({
		displayName: 'TodoAppView',
		getInitialState: function() {
			return {
				todoList: null
			};
		},
		componentWillMount: function() {
			var $this = this;
			TodoStore.registerForChange(function(data) {
				$this.setState({todoList: data});
			});
		},
		render: function() {
			return React.createElement('div', null, this.state.todoList);
		}
	});
});