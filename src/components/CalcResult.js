import React, { Component } from 'react';

class CalcResult extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        let message = "Nothing calculated yet";
        if(this.props.result && !this.props.isCalculating) {
            message = "Monthly payment: " + Number(this.props.result).toFixed(2) + "kr";

        } else if(this.props.isCalculating) {
            message = "Calculating ...";
        }
        return (<h1>{message}</h1>)
    }
}

export default CalcResult;
