const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    
    roomid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'rooms'
    },
    custid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'users'
    },
    hotel_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'hotels'
    },
  
    type:String,
    checkindate:{
        type:Date,
        required:true
    },
    checkoutdate:{
        type:Date,
        required:true
    }, isactive:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        default:"pending"
    }
});
module.exports=mongoose.model('booking',Schema)

