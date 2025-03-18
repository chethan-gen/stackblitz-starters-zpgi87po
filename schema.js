const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number}
});

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    roles: {type: [String],default:[]},
    profile: profileSchema,
    lastlogin: {type: Date}

})

const User = mongoose.model('User', UserSchema);

module.exports = User;