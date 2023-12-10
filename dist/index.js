'use strict';

var React = require('react');

var Button = function (_a) {
    var label = _a.label;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", null, label)));
};

var Alert = function (_a) {
    var message = _a.message;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, message)));
};

exports.Alert = Alert;
exports.Button = Button;
