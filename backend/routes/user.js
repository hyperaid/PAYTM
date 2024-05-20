const express = require('express');
const User = require('../model/User');
const router = express.Router();
const jwt= require('jsonwebtoken');
const zod=require('zod');
const JWT_SECRET = require('../config/jwtconifg');

const signupSchema=zod.object({
    name:zod.string().min(3),
    email:zod.string().email(),
    password:zod.string().min(6),
});

router.get('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const validatedData=signupSchema.safeParse(req.body);
        if(!validatedData.success){
            return res.status(400).json({error:validatedData.error});
        }
        const check=await User.findOne({
            email:req.body.email
        });
        if(check){
            return res.status(400).json({error:'User already exists'});
        }
        const User=await User.create({ name, email, password });
        const token=jwt.sign({userId:User.email},JWT_SECRET);
        res.json({
            message:'User created successfully',
            token:token
        });
    }catch(err){
        res.status(400).json({error:err});
    } 
 
     

}); 
module.exports = router;