import { Router } from 'express';
import  PurchaseOrder  from '../models/purchaseOrder.js';

const router = Router();

// GET endpoint to retrieve vendor data and product information based on P.O. number
router.get('/:poNumber', async (req, res) => {
  const poNumber = req.params.poNumber;

  try {
    // Query purchase orders by P.O. number and populate the vendor and products fields
    const purchaseOrder = await PurchaseOrder.findOne({ poNumber })
      .populate('vendorId')
      .populate('productIds');

    if (!purchaseOrder) {
      return res.status(404).json({ message: 'Purchase Order not found' });
    }

    res.json(purchaseOrder);
  } catch (err) {
    console.error('Error retrieving Purchase Order:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
