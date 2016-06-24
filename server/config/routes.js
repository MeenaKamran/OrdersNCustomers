// This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  // this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!
var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
    app.get('/all_customers', function(req, res) {
      // res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 34}]);
      customers.show_all(req, res);
    });

    app.post('/add_customer', function(req, res){
    	console.log("in /add_customer route: ",req.body);
    	customers.create(req, res);
    });

    app.post('/delete_cust/:id', function(req, res){
    	console.log("in delete_cust routes:");
    	customers.remove(req, res);
    });

    app.get('/all_orders', function(req, res) {
    	orders.show_all(req, res);
    });

    app.post('/add_order', function(req, res){
    	console.log("in routes /add_order");
    	orders.create(req, res);
    })
  };