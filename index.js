const express=require('express');
const app =express();

const mongoose=require('mongoose');
const employee=require('./routes/employee');
const donation=require('./routes/donation');
const donationlist=require('./routes/donations');
//mongoose.set('useFindAndModify', false);
const db='mongodb://localhost:27017/mongo-employee';
mongoose.Promise = global.Promise;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
mongoose.connect(db,err=>{
    if(err){
        console.log('Error!'+err)
    }
    else{
        console.log('Connected to mongodb')
    }
})
app.use('/',employee);
app.use('/don',donation);
app.use('/d',donationlist);
app.get('/',(req,res)=>
{
    res.send('Default Route');
});
app.get('/don',(req,res)=>
{
    res.send('Default Route 1');
});
app.get('/d',(req,res)=>
{
    res.send('Default Route 2');
});


const port=4000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));