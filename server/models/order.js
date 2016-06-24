var mongoose = require('mongoose');
// create our OrderSchema
var OrderSchema = new mongoose.Schema({
  cust_name: String,
  prod_name: String,
  qty: Number
}, {timestamps: true });
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Order', OrderSchema);