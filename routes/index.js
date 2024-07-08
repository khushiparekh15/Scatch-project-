const express = require('express');
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");
const productModel = require('../models/product-model');
const userModel = require('../models/user-model');
const { disconnect } = require('mongoose');

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{error,isLoggedin: false});
});

router.get("/shop",isLoggedin,async function(req,res){
    let products = await productModel.find();
    let success = req.flash("Success");
    res.render("shop",{products,success});
});

router.get("/cart",isLoggedin,async function(req,res){
    let user = await userModel
    .findOne({email: req.user.email})
    .populate("cart");

   const bill = Number(user.cart[0].price)+ 20 - Number(user.cart[0].discount);

    res.render("cart",{user,bill});
});

router.get("/addtocart/:productid",isLoggedin,async function(req,res){
   let user = await userModel.findOne({email: req.user.email});
   user.cart.push(req.params.productid);
   await user.save();
   req.flash("Success","Added to Cart..");
   res.redirect("/shop");
});

router.get("/logout",isLoggedin,function(req,res){
    res.render("shop");
});

module.exports = router;