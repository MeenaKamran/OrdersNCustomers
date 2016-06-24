// First add the following two lines at the top of the orders controller so that we can access our model through var Order
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
// this is our orders.js file located at /server/controllers/orders.js
// note the immediate function and the object that is returned
module.exports = (function() {
  return {
    show_all: function(req, res) {
    	//call to database
    	//retrieve data, check errors and send an http response w/ json data
       Order.find({}, function(err, results) {
         if(err) {
           console.log("Order(s) not found", err);
         } else {
            console.log("Successfully found the order(s)", results);
            res.json(results);
         }
     })
    },
    create: function(req, res) {
    	console.log("in create in orders.js");
      console.log("this is req.body.name", req.body);
    	var order = new Order({cust_name: req.body.cust_name, prod_name: req.body.prod_name, qty: req.body.qty});
      order.save(function(err, results){
        if (err) {
          console.log("order did not get saved, because of this error: ",err);
        } else {
          console.log("Successfully saved the order", results);
          res.json(results);
        }
      })
    }
  }
}) ();