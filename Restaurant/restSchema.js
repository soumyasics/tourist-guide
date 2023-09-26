const mongoose= require("mongoose");

const restSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country:{
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
    },type:{
        type:String
        
    },
    isactive:{
        type:Boolean,
        default:false
    },
    image:Object
    
});
module.exports=mongoose.model('restaurants',restSchema)

