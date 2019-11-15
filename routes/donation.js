const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const Donation=require('../NGO/src/models/Donation');

router.use(bodyParser.urlencoded({extend:true}));
router.use(bodyParser.json());

router.post('/api/donation',function(req,res,next){
    Donation.create(req.body,function(err,donation){
        if(err)return next(err);
        res.json(donation);
    });
});
module.exports=router;