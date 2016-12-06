/**
 * Created by erik on 04/12/2016.
 */
import fetch from 'isomorphic-fetch';

export const REQUEST_CALCULATE = 'REQUEST_CALCULATE';
export const DISPLAY_RESULT = 'DISPLAY_RESULT';
export const CLEAR = 'CLEAR';

export function requestCalculate() {
    return {
        type: REQUEST_CALCULATE
    }
}

export function displayResult(result) {
    return {
        type: DISPLAY_RESULT,
        result: result.amortizationSchedule[0].payment}
}

export function calculate(amount, interest, years) {
    console.log('calculate ' + amount + ' ' + interest + ' ' + years);
    var payments = years * 12;
    var currentYear =  new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    var endpoint = 'http://localhost:3001/'+amount+'/'+interest+'/'+payments+'/' + currentYear + '/' + currentMonth;
    return dispatch => {
        dispatch(requestCalculate());
        return fetch(endpoint)
            .then(response => response.json())
            .then(json => dispatch(displayResult(json)));
    }

}

export default function reducer(state = {isCaclulating: false, result: 'no result'}, action) {
    switch (action.type) {
    case REQUEST_CALCULATE : return {isCalculating: true, result: 'calculating...'};
    case DISPLAY_RESULT: return {isCalculating: false, result: action.result};
    case CLEAR: return {isCalculating:false, result: 'no result'};
    default: return state;
    }
}
