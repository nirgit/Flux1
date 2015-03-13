define([
    'react/addons',
    'lodash',
    'todo/TodoBar'
], function (React, _, TodoBar) {
    'use strict';
    function repeatItem1(item, itemIndex) {
        return React.createElement('li', {}, item);
    }
    return function () {
        return React.createElement('div', {}, '\n\tMy Todo List\n\t', React.createElement(TodoBar, {}), React.createElement('hr', {}), React.createElement.apply(this, _.flatten([
            'ul',
            {},
            _.map(this.state.todoList, repeatItem1.bind(this))
        ])));
    };
});