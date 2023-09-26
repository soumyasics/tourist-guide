

const room=require('./roomSchema')
const booking=require('./bookingSchema')
const bookingSchema=require('./bookingSchema')


//hotel Registration 

const addRoom=(req,res)=>{
    const newRoom=new room({
        roomNo:req.body.roomNo,
        ac:req.body.ac,
        type:req.body.type,
        hotel_id:req.params.id,
        price:req.body.price
    })
    newRoom.save().then(data=>{
        res.json({
            status:200,
            msg:"Inserted successfully",
            data:data
        })
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Data not Inserted",
            Error:err
        })
    })
}

//View all Rooms

const viewRooms=(req,res)=>{
  room.find().exec()
  .then(data=>{
    if(data.length>0){
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  }else{
    res.json({
      status:200,
      msg:"No Data obtained "
  })
  }
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

}

// view Rooms finished
//view room by hotel id
const viewRoomsByHotelId=(req,res)=>{
  room.find({hotel_id:req.params.id}).exec()
  .then(data=>{
    if(data.length>0){
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  }else{
    res.json({
      status:200,
      msg:"No Data obtained "
  })
  }
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

}
// view Room by id
const viewRoomById=(req,res)=>{
  room.findById({_id:req.params.id}).populate('hotel_id').exec()
  .then(data=>{
    
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  
}).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

}


//



// del Room by id
// const deleteRoomById=(req,res)=>{
//     room.findByIdAndDelete({_id:req.params.id}).exec()
//     .then(data=>{
      
//       res.json({
//           status:200,
//           msg:"Data obtained successfully",
//           data:data
//       })
    
//   }).catch(err=>{
//       res.json({
//           status:500,
//           msg:"Data not Inserted",
//           Error:err
//       })
//   })
  
//   }

// del Room by id
const deleteRoomById=async (req,res)=>{

  let flag=0
await bookingSchema.find({roomid:req.params.id}).exec()
.then(data1=>{
if(data1.length>0)
 flag=1
})
if(flag==0){
   await room.findByIdAndDelete({_id:req.params.id}).exec()
    .then(data=>{
      
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  
  }
  else{
    res.json({
      status:400,
      msg:"Delete operation cannot be performed as we have booking for this Room !!"
  })
  }
}

  
  
  //

//update Hotels by id
const editRoomsById=(req,res)=>{

  room.findByIdAndUpdate({_id:req.params.id},{
    roomNo:req.body.roomNo,
        ac:req.body.ac,
        type:req.body.type
    })
.exec().then(data=>{
  res.json({
      status:200,
      msg:"Updated successfully"
  })
}).catch(err=>{
  res.json({
      status:500,
      msg:"Data not Updated",
      Error:err
  })
})
}
//rerve room 
const updateStatus=(req,res)=>{

    room.findByIdAndUpdate({_id:req.params.id},{
      status:false
      })
  .exec().then(data=>{
    res.json({
        status:200,
        msg:"Updated successfully"
    })
  }).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Updated",
        Error:err
    })
  })
  }

//view all roomnumbers
const viewRoomNums=(req,res)=>{
    room.find({isactive:true},{_id:0,roomNo:1}).exec()
    .then(data=>{
      if(data.length>0){
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    }else{
      res.json({
        status:200,
        msg:"No Data obtained "
    })
    }
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  
  }




  // booking 
  
const availableRooms=async (req,res)=>{
  let rooms=[],invalid=[], valid=[]
  
  let checkin= new Date(req.body.checkindate)
  let checkout= new Date(req.body.checkoutdate)
  
  
  await room.find({hotel_id:req.body.hotel_id,type:req.body.type}).exec().then(data1=>{
    //console.log(data1);
    data1.map(x=>{
      rooms.push(x._id)
     // valid.push(x._id)
    })
  }).catch(err=>{
    console.log(err);
  })
  
  await booking.find({hotel_id:req.body.hotel_id,type:req.body.type}).exec().then(data2=>{
    //console.log(data1);
   data2.forEach(elem=>{
    console.log("in for");
    console.log(elem.checkindate,"",checkin);
    if(elem.checkindate.getTime()==checkin.getTime()){
    console.log("same 1");
    invalid.push(elem.roomid)
    
    }
    else if(checkin<elem.checkindate && (checkout>=elem.checkindate || checkout>=elem.checkoutdate))
    {console.log(" same 2");
    invalid.push(elem.roomid)
  }
    else if(checkin>=elem.checkindate && (checkout<=elem.checkoutdate || checkin<=elem.checkoutdate))
    {
      console.log(" same 3");
      invalid.push(elem.roomid)
    }
    else
    console.log("not");
   })
  
  
  }).catch(err=>{
    console.log(err);
  })
  
  const set1 = new Set(invalid.map(id => id.toString()));
  
  const subtractedArray = rooms.filter(id => !set1.has(id.toString()));
  console.log(subtractedArray);
  
  
  room.find({_id:{$in:subtractedArray}}).exec().then(data=>{
    res.json({
      data:200,
      data:data
    })
  }).catch(err=>{
    res.json({
      status:500,
      err:err
    })
  })
  
  
  }
  const bookRoom=(req,res)=>{
    let dob=new Date()
    const newbooking=new booking({
        roomid:req.body.roomid,
        custid:req.body.custid,
        hotel_id:req.body.hotel_id,
        dob:dob,
        type:req.body.type,
        checkindate:req.body.checkindate,
        checkoutdate:req.body.checkoutdate
       
    })
    newbooking.save().then(data=>{
        res.json({
            status:200,
            msg:"Inserted successfully",
            data:data
        })
    }).catch(err=>{
        res.json({
            status:500,
            msg:"Data not Inserted",
            Error:err
        })
    })
  }
  
  
  const viewBookingByCustId=(req,res)=>{
    let date=new Date()
    booking.find({custid:req.params.id,checkoutdate:{$gte:date}}).populate('hotel_id').populate('roomid')
    .exec().then(data=>{
      res.json({
          status:200,
          msg:"obtained successfully",
          data:data
      })
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not obtained",
          Error:err
      })
  })
  }
  
  
  
  const viewBookingByHotelid=(req,res)=>{
    let date=new Date()
    booking.find({hotel_id:req.params.id,checkoutdate:{$gte:date}}).populate('custid').populate('roomid')
    .exec().then(data=>{
      res.json({
          status:200,
          msg:"obtained successfully",
          data:data
      })
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not obtained",
          Error:err
      })
  })
  }
  
  
  const cancelBookingByid=async(req,res)=>{
    let date=new Date()
    let flag=0
  
    await booking.findById({_id:req.params.id}).exec().then(datas=>{
      console.log(datas);
      if(((((datas.checkindate).getMonth()))>date.getMonth()))
      flag=1
      else if((((((datas.checkindate).getMonth()))==date.getMonth()))&&(datas.checkindate).getDate()>date.getDate())
       flag=1
      console.log("mont",(((datas.checkindate).getMonth())),"",date.getMonth(),"",(datas.checkindate));
  
     })
    console.log("flag",flag);
  if(flag==1){
   await booking.findByIdAndDelete({_id:req.params.id})
    .exec().then(data=>{
      res.json({
          status:200,
          msg:"obtained successfully",
          data:data
      })
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not obtained",
          Error:err
      })
  })
  }
  else{
    res.json({
      status:500,
      msg:"Can't be updated as its too late !!"
  })
  }
  }
  
  

  

module.exports={addRoom,viewRooms,viewRoomsByHotelId,updateStatus,editRoomsById,deleteRoomById,viewRoomNums,
  viewRoomById,availableRooms,bookRoom,viewBookingByCustId,viewBookingByHotelid,cancelBookingByid}