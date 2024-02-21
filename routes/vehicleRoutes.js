import express from 'express';
const router = express.Router();
import Vehicle from '../models/vehicle.js';

// Get all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one vehicle
router.get('/:id', getVehicle, (req, res) => {
  res.json(res.vehicle);
});

// Create a vehicle
router.post('/', async (req, res) => {
  const vehicle = new Vehicle({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    dcNumber: req.body.dcNumber,
    poNumber: req.body.poNumber,
  });
  try {
    const newVehicle = await vehicle.save();
    res.status(201).json(newVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a vehicle
router.patch('/:id', getVehicle, async (req, res) => {
  if (req.body.make != null) {
    res.vehicle.make = req.body.make;
  }
  if (req.body.model != null) {
    res.vehicle.model = req.body.model;
  }
  if (req.body.year != null) {
    res.vehicle.year = req.body.year;
  }
  if (req.body.dcNumber != null) {
    res.vehicle.dcNumber = req.body.dcNumber;
  }
  if (req.body.poNumber != null) {
    res.vehicle.poNumber = req.body.poNumber;
  }
  try {
    const updatedVehicle = await res.vehicle.save();
    res.json(updatedVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a vehicle
router.delete('/:id', getVehicle, async (req, res) => {
  try {
    await res.vehicle.deleteOne();
    res.json({ message: 'Vehicle deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getVehicle(req, res, next) {
  let vehicle;
  try {
    vehicle = await Vehicle.findById(req.params.id);
    if (vehicle == null) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.vehicle = vehicle;
  next();
}

export default router;
