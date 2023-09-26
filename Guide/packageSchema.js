const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    
    destination:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    days:{
        type:Number,
        required:true
    },
    nights:{
        type:Number,
        required:true
    },
  
    travelmode:{
        type:String,
        required:true
    },
    accomodation:{
        type:String,
        required:true
    },
    food:{
        type:String,
        required:true
    },
    isactive:{
        type:Boolean,
        default:false
    },
    aid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'agencies'
    },
    image:Object
});
module.exports=mongoose.model('packages',Schema)

