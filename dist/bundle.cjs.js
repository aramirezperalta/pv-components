'use strict';

var React = require('react');

const Button = ({ label }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("button", null, label)));
};

const Alert = ({ message }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, message)));
};

exports.Alert = Alert;
exports.Button = Button;
