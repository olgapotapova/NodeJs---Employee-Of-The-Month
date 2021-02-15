const express = require('express');
const router = express.Router();
const Controller = require('../controllers/home');

router.get('/', Controller.getUsers);
router.get('/form', Controller.getFormPage);
router.post('/form', Controller.postUser);

module.exports = router;
