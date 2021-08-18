//Dependencies
const express = require('express');
const router = express.Router();
const path = require('path');

//* `GET /notes` should return the `notes.html` file.
router.get('/notes', (res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"))
});

//* `GET *` should return the `index.html` file.
router.get('*', (res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

module.exports = router;