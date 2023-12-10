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

const InputComponents = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900" }, props.label),
        React.createElement("div", { className: "mt-2" },
            React.createElement("input", { type: props.type, name: props.name, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", placeholder: props.placeholder ? props.placeholder : '' }))));
};

exports.Alert = Alert;
exports.Button = Button;
exports.InputComponents = InputComponents;
//# sourceMappingURL=index.js.map
