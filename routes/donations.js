const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const Donations=require('../NGO/src/models/Donations');

router.use(bodyParser.urlencoded({extend:true}));
router.use(bodyParser.json());

// router.post('/api/donations',function(req,res,next){
//     Donations.create(req.body,function(err,donations){
//         if(err)return next(err);
//         res.json(donations);
//     });
// });
module.exports=router;