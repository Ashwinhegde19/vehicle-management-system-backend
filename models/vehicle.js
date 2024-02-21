
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const vehicleSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  dcNumber: String,
  poNumber: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }] // Array of references to Product model
});

export default model('Vehicle', vehicleSchema);
