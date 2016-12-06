var express = require('express');
var request = require('request');

var app = express();
var router = express.Router();
router.get('/:amount/:interest/:payments/:startYear/:startMonth', function (req, res) {
    var url = 'https://cfs-ws-itera.cicero.no/cfp/6/ws/rest/calculator/calculateLoan?' +
        'loanRaisingMonth=' + req.params.startMonth +
        '&loanRaisingYear=' + req.params.startYear +
        '&principalAmount=' + req.params.amount +
        '&annualNominalInterestRate=' + req.params.interest +
        '&totalNumberOfPayments=' + req.params.payments;
    console.log(url);
    res.header('Access-Control-Allow-Origin', "*");
    request(url).pipe(res);
});
app.use(router);
app.listen(process.env.PORT || 3001);