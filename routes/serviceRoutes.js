// ./routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

// Route to get all services
router.get('/services', servicesController.getAllServices);

// Route to create a new service
router.post('/services', servicesController.createService);

// Route to update a service
router.put('/services/:serviceId', servicesController.updateService);

// Route to delete a service
router.delete('/services/:serviceId', servicesController.deleteService);

module.exports = router;
