const jwt = require('jsonwebtoken');
const cors = require('cors'); // Import the cors library

module.exports = (req, res, next) => {
  // Enable CORS for all routes in this middleware
  cors()(req, res, () => {}); // Add this line to handle CORS headers

  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
