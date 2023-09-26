const mongoose= require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    idtype:{
        type:String,
        required:true
    },
    idnumb:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
  
    email:{
        type:String,
        unique:true,
        required:true,
       
        dropDups: true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },gender:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('users',userSchema)

