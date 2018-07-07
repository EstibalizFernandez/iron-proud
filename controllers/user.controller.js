const mongoose = require('mongoose');
const createError =  require('http-errors');
const User =  require('./../model/users.model');

module.exports.create = (req, res, next) => {
    res.render('users/login', {
        user: new User()
    })
}

module.exports.doCreate = (req, res, next ) => {
    const newUser = new User(req.body);
    console.log(newUser)

    User.findOne({ email: newUser.email })
        .then(paco => {
            if(paco) {
                return res.render('users/login', {user: new User, errors: "User exists"});
            } else {
                newUser.save()
                    .then(()=>{
                        res.redirect('/users/create');
                    })
                    .catch(error => {
                        next();
                    } )
            }

        } )

}

