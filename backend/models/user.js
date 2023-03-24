const mongooose = require("mongoose");

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 1024,
    },
});

const User = mongooose.model("user", userSchema);

exports.User = User;