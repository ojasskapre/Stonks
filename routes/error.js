var express = require('express');
var router = express.Router();

router.use(function(err, req, res, next) {
    res.render('error.html');
});

module.exports = router;