const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if(process.env.NODE_ENV === "development");{
    router.post('/create',async function(req,res){
        let owners= await ownerModel.find()
        if(owners.length > 0){
            return res
            .status(503)
            .send("You don't have Permission to create a new owner.");
        }
        let {fullname,email,password} = req.body;
       let createOwner =  await ownerModel.create({ 
            fullname,         
            email,
            password,
        });
        res.status(201).send(createOwner);
    });
}
router.get('/',function(req,res){
    res.send("Hey it's Working");
});



module.exports = router;