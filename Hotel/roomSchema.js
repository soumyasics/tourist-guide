const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    roomNo:{
        type:String,
        unique:true,
        required:true,
       
        dropDups: true
       
    },
    hotel_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'hotels'
    },
    
    ac:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
   
    status:{
        type:Boolean,
        default:true
    },
    price:{
        type:Number,
        required:true
    }
  
  
});
module.exports=mongoose.model('rooms',Schema)

