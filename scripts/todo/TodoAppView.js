define(['react', 'stores/TodoStore', 'todo/TodoAppView.rt'], function(React, TodoStore, template) {
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
		render: template
	});
});