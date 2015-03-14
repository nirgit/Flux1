define([
    'react/addons',
    'lodash'
], function (React, _) {
    'use strict';
    return function () {
        return React.createElement('div', { 'className': 'app-todo-bar' }, React.createElement('label', {}, '\n\t\tAdd your Todo task\n\t\t', React.createElement('input', {
            'ref': 'todoDescription',
            'type': 'text',
            'valueLink': this.linkState('todoTask')
        }), React.createElement('button', { 'onClick': this.addTodo }, 'Add')));
    };
});