const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
var jwt=require('jsonwebtoken');
const Employee=require('../NGO/src/models/Employee');
const Donation=require('../NGO/src/models/Donation');
const Donationlist=require('../NGO/src/models/Donations');
router.use(bodyParser.urlencoded({extend:true}));
router.use(bodyParser.json());
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });
 
//  const employee=new Employee({
//      FirstName:String,
//     LastName:String,
//     Email: String,
//     Password: String,
//     Role: String
//  })
//  router.post("/api/employee", async (request, response) => {
//     try {
//         request.body.Password = Bcrypt.hashSync(request.body.Password, 10);
//         var employee = new Employee(request.body);
//         var result = await employee.save();
//         response.send(result);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

router.post('/api/employee',function(req,res,next){
    var employee=new Employee({
        FirstName:req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password,//Employee.hashPassword(req,body.Password),
        Role: req.body.Role
    });
    employee.save( function(err,data)  {
       if(err)throw err;
       else console.log("Success:",data);
      });
    });
   
router.post('/api/login',function(req,res,next){
    let promise=Employee.findOne({FirstName:req.body.FirstName}).exec();
    promise.then(function(doc){
        if(doc) {
            if(doc.isValid(req.body.Password)&&doc.Role=="admin"){
                // generate token
                let token = jwt.sign({FirstName:doc.FirstName},'secret', {expiresIn : '3h'});
                
                return res.status(200).json(token);
      
            }else if(doc.isValid(req.body.Password)){
                  let token1 = jwt.sign({FirstName:doc.FirstName},'secret', {expiresIn : '3h'});
                
                 return res.status(200).json(token1);
            }
             else {
                 
              return res.status(501).json({message:' Invalid Credentials'});
            }
          }
          else {
             
            return res.status(501).json({message:'User email is not registered.'})
          }});

    promise.catch(function(err){
             return res.status(501).json({message:'error registering user.'})
         })
        
    });
    // function requireAdmin() {
    //     return function(req, res, next) {
    //       Employee.findOne({ FirstName:req.body.FirstName }, function(err,doc) {
    //         if (err) { return next(err); }
      
    //         if (doc) { 
    //             if(doc.isValid(req.body.Password)&&(doc.Role="admin")){
    //                 //generate token
    //                 let token=jwt.sign({firstname:doc.FirstName}, 'secret',{expiresIn:'3h'});
    //                 return res.statue(200).json(token),res.redirect('/admin');
    //                 }
    //             else if(doc.isValid(req.body.Password)){
    //                     return res.status(200).json(token),res.redirect('/user');
    //                 }
    //                 else{
    //                     return res.status(501),res.redirect('/login');
    //                 }
                    
    //         }

    //         next();
    //       });
    //     }
    //   }
    
        
 
// let promise=employee.save();
//     promise.then(function(doc){
//         return res.status(201).json(doc);
//     })
//     promise.catch(function(err){
//         return res.status(501).json({message:'error registering user.'})
//     })
// Employee.create(req.body,function(err,employee){
//         if(err)return next(err);
//         res.json(employee);
//     })
//     });
    //==========================================================
    
    // 
    // ----------------------------------------
    // Employee.create(req.body,function(err,employee){
    //     if(err)return next(err);
    //     res.json(employee);
    // });
    
// post the donation
router.post('/api/donation',function(req,res,next){
    Donation.create(req.body,function(err,donation){
        if(err)return next(err);
        res.json(donation);
    });
});
router.post('/api/donationlist',function(req,res,next){
    Donationlist.create(req.body,function(err,donationlist){
        if(err)return next(err);
        res.json(donationlist);
    });
});
/*get all employee*/
router.get('/api/employee', function(req,res,next){
    Employee.find(function(err,employee){
        if(err) return next(err);
        res.json(employee);
    });
});
// get all donation type
router.get('/api/donation', function(req,res,next){
    Donation.find(function(err,donation){
        if(err) return next(err);
        res.json(donation);
    });
});
router.get('/api/donationlist',function(req,res,next){
    Donationlist.find(function(err,donationlist){
        if(err) return next(err);
        res.json(donationlist);
    });
});
/*get single employe by id*/
router.get('/api/employee/:id', function(req,res,next){
    Employee.findById(req.params.id, function(err,employee){
        if(err) return next(err);
        res.json(employee);
    });
});
/*get single Dtype by id*/
router.get('/api/donation/:id', function(req,res,next){
    Donation.findById(req.params.id, function(err,donation){
        if(err) return next(err);
        res.json(donation);
    });
});
// router.get('/api/donationlist/:id', function(req,res,next){
//     Donationlist.findById(req.params.id, function(err,donationlist){
//         if(err) return next(err);
//         res.json(donationlist);
//     });
// });

router.put('/api/employee/:id', function(req,res,next){
    console.log(req.params.id)
    Employee.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,employee){
        console.log(req.params.id)
        if(err)return next(err);
        res.json(employee);
    });
});
router.put('/api/donation/:id', function(req,res,next){
    console.log(req.params.id)
    Donation.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,donation){
        console.log(req.params.id)
        if(err)return next(err);
        res.json(donation);
    });
});

router.delete('/api/employee/:id', function(req,res,next){
    Employee.findByIdAndDelete(req.params.id,req.body,function(err,employee){
        if(err)return next(err);
        res.json(employee);
    });
});
router.delete('/api/donation/:id', function(req,res,next){
    Donation.findByIdAndDelete(req.params.id,req.body,function(err,donation){
        if(err)return next(err);
        res.json(donation);
    });
});
router.delete('/api/donationlist/:id', function(req,res,next){
    Donationlist.findByIdAndDelete(req.params.id,req.body,function(err,donationlist){
        if(err)return next(err);
        res.json(donationlist);
    });
});
      
module.exports=router;