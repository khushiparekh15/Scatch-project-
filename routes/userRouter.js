const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");

const {registerIUser,loginUser,logout} = require("../controllers/authControllers");


router.get('/',function(req,res){
    res.send("Hey it's Working");
});

router.post('/register',registerIUser);

router.post('/login',loginUser);

router.get("/logout",logout);
module.exports = router;
