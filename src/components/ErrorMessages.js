import React, { Component } from 'react';
import '../stylesheets/ErrorMessages.css';

class ErrorMessages extends Component {

    render() {
        const listItems = this.props.messages.map((message) =>
            <li>{message.message}</li>
        );
        return (
            <div>
                <ul className="error-messages">{listItems}</ul>
            </div>
        );
    }
}

export default ErrorMessages;
