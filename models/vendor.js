import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const vendorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String
});

export default model('Vendor', vendorSchema);
