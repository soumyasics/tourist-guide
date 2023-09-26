const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    regNo:{
        type:String,
        unique:true,
        required:true,
       
        dropDups: true
    },
    
    ac:{
        type:String,
        required:true
    },
    sc:{
        type:Number,
        required:true
    },
    model:{
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
    brand:{
        type:String,
        required:true
    }, driverName:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('taxis',Schema)

