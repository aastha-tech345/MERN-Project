const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const documentSchema = new Schema({
  document_title:{type:String},
  document_type:{type:String},
  document_upload:{type:String},
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  added_by:{type:String}
});

const Document = mongoose.model('document', documentSchema,'document');

module.exports = { Document };
