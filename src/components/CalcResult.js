import React, { Component } from 'react';

class CalcResult extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <h1>Monthly payment: {this.props.result}</h1>
        );
    }
}

export default CalcResult;
