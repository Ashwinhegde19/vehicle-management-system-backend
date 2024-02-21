import express from 'express';
const router = express.Router();
import Vendor from '../models/vendor.js';

// Get all vendors
router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one vendor
router.get('/:id', getVendor, (req, res) => {
  res.json(res.vendor);
});

// Create a vendor
router.post('/', async (req, res) => {
  const vendor = new Vendor({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  try {
    const newVendor = await vendor.save();
    res.status(201).json(newVendor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a vendor
router.patch('/:id', getVendor, async (req, res) => {
  if (req.body.name != null) {
    res.vendor.name = req.body.name;
  }
  if (req.body.email != null) {
    res.vendor.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.vendor.phone = req.body.phone;
  }
  try {
    const updatedVendor = await res.vendor.save();
    res.json(updatedVendor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a vendor
router.delete('/:id', getVendor, async (req, res) => {
  try {
    await res.vendor.deleteOne();
    res.json({ message: 'Vendor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getVendor(req, res, next) {
  let vendor;
  try {
    vendor = await Vendor.findById(req.params.id);
    if (vendor == null) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.vendor = vendor;
  next();
}

export default router;
