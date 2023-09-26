const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    district:{
        type:String,
        required:true
    },
    
    city:{
        type:String,
        required:true
    },
    loc:{
        type:String,
        required:true
    },
   
    addedby:{
        type:String,
        required:true
    },
    travelmode:{
        type:String,
        required:true
    },
    distance:String,
   locType:String,

    
    isactive:{
        type:Boolean,
        default:false
    },
    image:Object,
    custId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customers'
    },
    lat:{
        type:Number
    },
    lon:{
        type:Number
    }
    
});
module.exports=mongoose.model('touristplaces',Schema)

