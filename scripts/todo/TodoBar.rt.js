define([
    'react/addons',
    'lodash'
], function (React, _) {
    'use strict';
    return function () {
        return React.createElement('div', {}, React.createElement('label', {}, '\n\t\tAdd your Todo task\n\t\t', React.createElement('input', { 'type': 'text' }), React.createElement('button', {}, 'Add')));
    };
});