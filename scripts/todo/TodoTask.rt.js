define([
    'react/addons',
    'lodash'
], function (React, _) {
    'use strict';
    return function () {
        return React.createElement('div', { 'className': 'todo-task' }, React.createElement('label', {}, '\n\t\t' + this.props.message + '\n\t\t', React.createElement('button', {
            'className': 'todo-task-remove-button',
            'onClick': this.removeTask
        }, 'x')));
    };
});