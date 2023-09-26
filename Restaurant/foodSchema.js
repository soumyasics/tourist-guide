const mongoose= require("mongoose");

const foodschema=mongoose.Schema({
    restid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'restaurants'
    },
foodname:{
    type:String,
    required:true,
      
},
vegornon:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
type:{
    type:String,
    required:true
},
image:{
    type:Object
},

description:{
    type:String
}
});
module.exports=mongoose.model('foods',foodschema)