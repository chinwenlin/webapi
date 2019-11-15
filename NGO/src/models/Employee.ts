
export class Employee{
        FirstName:String;
        LastName:  String;
        Email:  String;
        Password: String ;
        Role: String;
     };


//==========================the below is for mongoose db connection===//

// const mongoose=require('mongoose');
// var bcrypt =require('bcrypt');
// let SALT_WORK_FACTOR = 5
// var employeeSchema=new mongoose.Schema({
//     FirstName: { type: String, required: true},
//     LastName:{ type: String, required: true},
//     Email: { type: String, required: true},
//     Password:{ type: String, required: true},
//     Role: { type: String, required: true}
// });

// employeeSchema.pre('save', function(next) {
//  var employee = this;
//  // Generate a password hash when the password changes (or a new password)
//  if (!employee.isModified('Password')) return next();
//  // Generate a salt
//  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//   if (err) return next(err);
//   // Combining Salt to Generate New Hash
//   bcrypt.hash(employee.Password, salt, function(err, hash) {
//    if (err) return next(err);
//    // Overwriting plaintext passwords with hash
//    employee.Password = hash;
//    next();
//   });
//  });
// });
// employeeSchema.methods.isValid=(function(hashedpassword){
//     return bcrypt.compareSync(hashedpassword,this.Password);
// })


// module.exports=mongoose.model('Employee',employeeSchema);