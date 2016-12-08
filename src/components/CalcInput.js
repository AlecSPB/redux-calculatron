import React, { Component } from 'react';
import CalcResult from "./CalcResult";
import ErrorMessages from "./ErrorMessages";
import "../stylesheets/CalcInput.css";

class CalcInput extends Component {
    constructor(props) {
        super(props);
        this.state = {interest: 2  , amount: 100000, years: 20, errorMessages: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onStateValid = this.onStateValid.bind(this);
    }
    handleChange(event) {
        var newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(Object.assign({}, this.state, newState));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.validateState(this.onStateValid);
    }

    onStateValid() {
        this.props.onClick(this.state.amount, this.state.interest, this.state.years);
    }

    validateState(onStateValid) {
        this.setState({errorMessages:[]});
        var tempErrorMessages = [];
        if(!(CalcInput.between(this.state.amount, 10000, 100000000))) {
            tempErrorMessages.push({key: "amount", message: "Amount must be between 10000 and 100000000"});
        }

        if(!(CalcInput.between(this.state.interest, 0,20))) {
            tempErrorMessages.push({key: "interest", message:"Interest must be between 0 and 20"});
        }
        if(!(CalcInput.between(this.state.years, 1, 40))) {
            tempErrorMessages.push({key: "years", message:"years must be between 1 and 40"});
        }
        if(tempErrorMessages.length > 0) {
            this.setState({errorMessages:tempErrorMessages});
        } else {
            onStateValid();
        }
    }

    static between(n, min, max) {
        return n > min && n < max;
    }

    render() {
        const { result, isCalculating } = this.props;
        return (
            <div className="input-form">
                <form>
                    <section>
                        <label>Amount</label>
                        <input name="amount" type="number" min="10000" max="100000000" value={this.state.amount} onChange={this.handleChange}/>

                    </section>
                    <section>
                        <label>Interest</label>
                        <input name="interest" type="number" step="0.01" min="0" max="20" value={this.state.interest}  onChange={this.handleChange}/>

                    </section>
                    <section>
                        <label>Years</label>
                        <input name="years" type="number" value={this.state.years}  onChange={this.handleChange}/>

                    </section>
                    <ErrorMessages messages={this.state.errorMessages}/>
                    <button type="submit" value="calculate it" onClick={this.handleSubmit}>Calculate it</button>
                </form>
                <CalcResult result={result} isCalculating={isCalculating} />

            </div>
        );
    }
}


export default CalcInput;
