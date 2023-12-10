import React from 'react';

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

export { Alert, Button };
