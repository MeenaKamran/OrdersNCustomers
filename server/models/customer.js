var mongoose = require('mongoose');
// create our OrderSchema
var CustomerSchema = new mongoose.Schema({
  name: String,
}, {timestamps: true });
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Customer', CustomerSchema);