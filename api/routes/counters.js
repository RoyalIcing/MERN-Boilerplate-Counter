const express = require('express');
const Counter = require('../models/Counter');

const router = express.Router();

// Index: list all
router.get('/', function(req, res, next) {
    Counter.find()
        .then(counters => {
            res.json(counters);
        });
});

// Show: find specific
router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    Counter.findById(id)
        .then(counter => {
            res.json(counter);
        });
});

module.exports = router;
