// ./routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

// Route to get all services
router.get('/orders', ordersController.getAllOrders);

// Route to create a new order
router.post('/orders', ordersController.createOrder);

// Route to update a order
router.put('/orders/:orderId', ordersController.updateOrder);

// Route to delete a order
router.delete('/orders/:orderId', ordersController.deleteOrder);

module.exports = router;
