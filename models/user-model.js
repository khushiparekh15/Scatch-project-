const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname:{
        type: String,
        minLength: 10,
        trim: true
    },
    email: String,
    pssword: String,
    cart:{
        type: Array,
        default: [],
    },
    isadmin: Boolean,
    orders:{
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
});

module.exports = mongoose.model("user",userSchema);