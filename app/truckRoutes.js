var express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');
var Truck = require('./truckModel');

var router = express.Router();

router.route('/')
.get(function(request, response) {
	Truck.find(function (error, trucks) {
	    if (error) {   
	        response.status(500).send(error);
	    } else {
	        response.json(trucks);
	    }
	});
});

router.route('/:id')
.get(function(request,response) {
	Book.findById(request.params.id, function (error, truck) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json(truck);
        }
	});
});

module.exports = router;