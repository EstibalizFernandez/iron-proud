const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRound = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: 'Email is required',
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: 'Password is required',
        minlength: 4
    }
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();

    bcrypt.genSalt(saltRound)
        .then(saltValue => {
            return bcrypt.hash(this.password, saltValue)
        })
        .then(hash => {
            this.password = hash;
            next()
        })
        .catch(error => {
            this.password = null;
            next();
        })
})

module.exports = mongoose.model('User', userSchema);