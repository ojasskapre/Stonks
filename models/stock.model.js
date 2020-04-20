const mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
    stockName: {
        type: String,
    },
    stockExchange: {
        type: String
    },
    buyPrice: {
        type: String
    },
    quantity: {
        type: String
    }
});

mongoose.model('Stock', stockSchema);