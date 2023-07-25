const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const servicesController = require('../controllers/services');
const ordersController = require('../controllers/orders');

// Users routes
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);

// Services routes
router.post('/services', servicesController.createService);
router.put('/services/:id', servicesController.updateService);
router.delete('/services/:id', servicesController.deleteService);
router.get('/services', servicesController.getAllServices);
router.get('/services/:id', servicesController.getServiceById);

// Orders routes
router.post('/orders', ordersController.createOrder);
router.put('/orders/:id', ordersController.updateOrder);
router.delete('/orders/:id', ordersController.deleteOrder);
router.get('/orders', ordersController.getAllOrders);
router.get('/orders/:id', ordersController.getOrderById);

module.exports = router;
