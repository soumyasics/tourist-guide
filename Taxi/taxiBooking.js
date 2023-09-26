const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    
    taxiid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'taxis'
    },
    custid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'users'
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
  
   dob:Date,
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
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
module.exports=mongoose.model('taxibooking',Schema)

