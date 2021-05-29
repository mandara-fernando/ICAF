const mongoose=require('mongoose');
const schema=mongoose.schema;

const userSchema = new mongoose.Schema({

email:{
    type:String,
    required: true
},
userType:{
    type:String,
    required: true
},

passwordHash:{
    type:String,
    required: true
}
});

const User = mongoose.model("User account",userSchema);
module.exports=User;