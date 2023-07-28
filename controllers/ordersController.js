// ./controllers/ordersController.js
const db = require('../db');
const { existsOrError } = require('./validation');

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await db('orders');
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { user_id, service_id, name, price } = req.body;

    // Validate the input data
    existsOrError(user_id, 'User ID is required');
    existsOrError(service_id, 'Service ID is required');
    existsOrError(name, 'Name is required');
    existsOrError(price, 'Price is required');

    // Insert the new order into the 'orders' table
    const [orderId] = await db('orders').insert({
      user_id,
      service_id,
      name,
      price,
    });

    res.status(201).json({ orderId, user_id, service_id, name, price });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an order
exports.updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { user_id, service_id, name, price } = req.body;

    // Validate the input data
    existsOrError(user_id, 'User ID is required');
    existsOrError(service_id, 'Service ID is required');
    existsOrError(name, 'Name is required');
    existsOrError(price, 'Price is required');

    // Update the order in the 'orders' table
    const updatedRows = await db('orders').where('id', orderId).update({
      user_id,
      service_id,
      name,
      price,
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ message: 'Order updated successfully' });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Delete the order from the 'orders' table
    const deletedRows = await db('orders').where('id', orderId).del();

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
