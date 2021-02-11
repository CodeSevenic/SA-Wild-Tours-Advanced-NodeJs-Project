const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Handling GET and POST users requests
router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUsers);
// Handling GET and PATCH single user
router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
