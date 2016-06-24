// First add the following two lines at the top of the customers controller so that we can access our model through var Customer
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
// this is our customers.js file located at /server/controllers/customers.js
// note the immediate function and the object that is returned
module.exports = (function() {
  return {
    show_all: function(req, res) {
    	//call to database
    	//retrieve data, check errors and send an http response w/ json data
       Customer.find({}, function(err, results) {
         if(err) {
           console.log("Customer(s) not found", err);
         } else {
            console.log("Successfully found the customer(s)", results);
            res.json(results);
         }
     })
    },
    create: function(req, res) {
      console.log("in create in customers.js");
      console.log("this is req.body.name", req.body.name);
      Customer.find({name:req.body.name}, function(err, result){
        if (err) {
          console.log("something went wrong: ", err);
        }else{
          console.log("length of results ",result.length);
          if (result.length == 0){
            var customer = new Customer({name: req.body.name});
            customer.save(function(err, results){
              if (err) {
                console.log("customer did not get saved, because of this error: ",err);
              } else {
                console.log("Successfully saved the customer", results);
                res.json(results);
              }
            })
          } else {
            console.log("that customer name already exists");
            res.json({error: "customer already exists with that name"});
          }
        }
      })
    	
    },
    remove: function(req, res) {
      console.log("this is the id to delete: ", req.params.id);
      Customer.remove({_id:req.params.id}, function(err){
        if (err){
          console.log("there was an error deleting the customer");
        }else {
          console.log("Successfully deleted the customer");
          // res.redirect('/all_customers');
        }
      })
    }
  }
})();