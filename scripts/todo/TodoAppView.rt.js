define([
    'react/addons',
    'lodash',
    'todo/TodoBar',
    'todo/TodoTask'
], function (React, _, TodoBar, TodoTask) {
    'use strict';
    function repeatItem1(item, itemIndex) {
        return React.createElement('li', {}, React.createElement(TodoTask, {
            'id': itemIndex,
            'message': item
        }));
    }
    return function () {
        return React.createElement('div', {}, '\n\tMy Todo List\n\t', React.createElement(TodoBar, {}), React.createElement('hr', {}), React.createElement.apply(this, _.flatten([
            'ul',
            {},
            _.map(this.state.todoList, repeatItem1.bind(this))
        ])));
    };
});