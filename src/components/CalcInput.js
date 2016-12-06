import React, { Component } from 'react';
import CalcResult from "./CalcResult";
import "../stylesheets/CalcInput.css";

class CalcInput extends Component {
    constructor(props) {
        super(props);
        this.state = {interest: 2  , amount: 100000, years: 20};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        var newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(Object.assign({}, this.state, newState));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onClick(this.state.amount, this.state.interest, this.state.years);
    }

    render() {
        const { result } = this.props;
        return (
            <div className="input-form">
                <form>
                    <section>
                        <label>Amount</label>
                        <input name="amount" type="number" min="10000" max="100000000" value={this.state.amount} onChange={this.handleChange}/>
                    </section>
                    <section>
                        <label>Years</label>
                        <input name="years" type="number" value={this.state.years}  onChange={this.handleChange}/>
                    </section>
                    <section>
                        <label>Interest</label>
                        <input name="interest" type="number" step="0.01" min="0" max="20" value={this.state.interest}  onChange={this.handleChange}/>
                    </section>
                    <button type="submit" value="calculate it" onClick={this.handleSubmit}>Calculate it</button>
                </form>
                <CalcResult result={result} />
            </div>
        );
    }
}


export default CalcInput;
