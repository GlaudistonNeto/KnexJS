// ./controllers/servicesController.js
const db = require('../db');
const { existsOrError } = require('./validation');

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await db('services');
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new service
exports.createService = async (req, res) => {
  try {
    const { name, price } = req.body;

    // Validate the input data
    existsOrError(name, 'Name is required');
    existsOrError(price, 'Price is required');

    // Insert the new service into the 'services' table
    const [serviceId] = await db('services').insert({
      name,
      price,
    });

    res.status(201).json({ serviceId, name, price });
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { name, price } = req.body;

    // Validate the input data
    existsOrError(name, 'Name is required');
    existsOrError(price, 'Price is required');

    // Update the service in the 'services' table
    const updatedRows = await db('services').where('id', serviceId).update({
      name,
      price,
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json({ message: 'Service updated successfully' });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    const { serviceId } = req.params;

    // Delete the service from the 'services' table
    const deletedRows = await db('services').where('id', serviceId).del();

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
