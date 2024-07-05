const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname:{
        type: String,
        minLength: 10,
        trim: true
    },
    email: String,
    pssword: String,
    products:{
        type: Array,
        default: [],
    },
    picture: String,
    gstin: String,
});

module.exports = mongoose.model("owner",ownerSchema);