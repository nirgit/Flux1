define(['react'], function(React) {
	'use strict';

	return React.createClass({
		displayName: 'TodoAppView',
		render: function() {
			return React.createElement('div', null, ['todo1', 'todo2', 'todo3']);
		}
	});
});