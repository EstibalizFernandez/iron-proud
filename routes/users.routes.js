const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controller');

const authMiddleware = require('../middlewares/auth.middleware');

router.get(
    '/create',
    userControllers.create
);

// router.post(
//     '/create',
//     userControllers.doCreate
// );

module.exports = router;