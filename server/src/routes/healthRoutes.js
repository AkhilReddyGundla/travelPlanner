const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'TripOS backend is healthy and running smoothly',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
