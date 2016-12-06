import React, { Component } from 'react';
import CalcInput from '../components/CalcInput';
import { connect } from 'react-redux'
import {calculate} from '../actions';
import '../stylesheets/App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleCalculateClick = this.handleCalculateClick.bind(this)

    }

    handleCalculateClick (amount, interest, years) {
        this.props.dispatch(calculate(amount, interest, years));
    }
    render() {
        return (
            <div className="calculator">
                <div className="header">
                    <h1>Cacculatron</h1>
                </div>

                <CalcInput
                    onClick={this.handleCalculateClick}
                    result={this.props.result}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {isCalculating, result} = state;

    return {
        isCalculating,
        result
    }
}


export default connect(mapStateToProps)(App)
