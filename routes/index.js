var express = require('express');
var router = express.Router();

var request = require("request");

router.get('/', function(req, res, next) {
    var request = require("request");

    var options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary',
    qs: {region: 'IN', lang: 'en'},
    headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': 'd766ab122amshbdf86436a0cdf65p12e392jsnb19f672a6914'
    }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
    
    // res.render('index.html');
});

module.exports = router;