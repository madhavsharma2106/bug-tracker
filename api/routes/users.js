const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.post('/signup', usersController.userSignUp);
router.post('/login', usersController.userLogin);
router.delete('/', usersController.deleteUser);
router.get('/', usersController.getAllUsers);
router.patch('/', usersController.editUser);


module.exports = router;