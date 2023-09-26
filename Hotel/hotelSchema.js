const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    hotelName:{
        type:String,
        required:true
    },
    
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
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
    regNo:{
        type:String,
        required:true
    },
    isactive:{
        type:Boolean,
        default:false
    },
    image:Object,
    rating:{
        type:Number,
        default:0
    }
});
module.exports=mongoose.model('hotels',Schema)

