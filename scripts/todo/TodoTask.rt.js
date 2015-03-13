define([
    'react/addons',
    'lodash'
], function (React, _) {
    'use strict';
    return function () {
        return React.createElement('div', {}, React.createElement('label', {}, '\n\t\t' + this.props.message + '\n\t\t', React.createElement('button', { 'onClick': this.removeTask }, 'x')));
    };
});