import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const purchaseOrderSchema = new Schema({
  poNumber: {
    type: String,
    required: true,
    unique: true
  },
  vendorId: {
    type: Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  productIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }]
});

export default model('PurchaseOrder', purchaseOrderSchema);
