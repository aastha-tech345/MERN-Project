const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const customerSchema = new Schema({
  fname: {type:String},
  lname: {type:String},
  phone: {type:String},
  email: {type:String},
  plz: {type:String},
  city: {type:String},
  street: {type:String},
  created_by: { type: Schema.Types.Mixed, ref: 'User'},
  status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
  land:{type:String},
  group:{type:String},
  dob:{type:String}
  // parent_id: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Customer = mongoose.model('customer', customerSchema,'customer');

module.exports = { Customer };
