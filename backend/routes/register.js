const bycrypt = require("bcrypt");
const joi = require("joi");
const express = require("express");
const { User } = require("../models/user");
const genAuthToken = require("../utils/genAuthToken");
const router = express.Router();

router.post("/", async (req, res)=> {
    const schema = joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().min(3).max(200).required().email(),
        password: joi.string().min(6).max(200).required(),
    });

    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});

    if(user) return res.status(400).send("User already exist");

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    const salt = await bycrypt.genSalt(10);
    user.password = await bycrypt.hash(user.password, salt);
    user = await user.save();

    const token = genAuthToken(user);
    res.send(token);
});

module.exports = router;