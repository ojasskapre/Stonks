const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Stock = mongoose.model('Stock');

router.get('/', (req, res) => {
    res.render("addOrEdit.html", {
        viewTitle: "Insert Stock Details"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var stock = new Stock();
    console.log(req.body);
    stock.stockName = req.body.stockName;
    stock.stockExchange = req.body.stockExchange;
    stock.buyPrice = req.body.buyPrice;
    stock.quantity = req.body.quantity;
    stock.save((err, doc) => {
        if (!err)
            res.redirect('stock/list');
        else
            console.log('Error during record insertion : ' + err);
    });
}

function updateRecord(req, res) {
    Stock.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('stock/list'); }
        else
            console.log('Error during record update : ' + err);
    });
}


router.get('/list', (req, res) => {
    Stock.find((err, docs) => {
        if (!err) {
            res.render("list.html", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving stock list :' + err);
        }
    });
});


router.get('/:id', (req, res) => {
    Stock.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("addOrEdit.html", {
                viewTitle: "Update stock",
                stock: doc
            });
        }
    });
});


router.get('/delete/:id', (req, res) => {
    Stock.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/stock/list');
        }
        else { console.log('Error in stock delete :' + err); }
    });
});

module.exports = router;