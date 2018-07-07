const mongoose = require('mongoose');
const createError =  require('http-errors');
const User =  require('./../model/users.model');

module.exports.create = (req, res, next) => {
    res.render('users/login')
}

