

const taxi=require('./taxiSchema')
const taxibooking=require('./taxiBooking')

const jwt=require('jsonwebtoken');

const secret = 'your-secret-key'; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};





//taxi Registration 

const registerTaxi=(req,res)=>{
    const newTaxi=new taxi({
        ac:req.body.ac,
        regNo:req.body.regNo,
        sc:req.body.sc,
        model:req.body.model,
        brand:req.body.brand,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password,
        driverName:req.body.driverName
    })
    newTaxi.save().then(data=>{
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
//Taxi Registration -- finished

//Login Taxi 
const loginTaxi = (req, res) => {
  
    const { email, password } = req.body;
  
    taxi.findOne({ email }).exec().then (user => {
     
  
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
        if (user.password!=password) {
          return res.status(500).json({ msg:'incorrect pwd' });
        }
  
      
        const token = createToken(user);
  
        res.status(200).json({ user, token });
      })
      .catch(err=>{
        console.log(err);
          return res.status(500).json({ msg: 'Something went wrong' });
        
      })
    
  };
  //validate
  
  
  const requireAuth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
  
    console.log("t1",token);
    console.log("secret",secret);
    if (!token) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }
    jwt.verify(token, secret, (err, decodedToken) => {
      console.log(decodedToken);
      if (err) {
        return res.status(401).json({ messamsgge: 'Unauthorized' ,err:err});
      }
  
      req.user = decodedToken.userId;
      next();
      return res.status(200).json({ msg: 'ok' ,user:decodedToken.userId});
    });
    console.log(req.user);
  };
  
  
//Login Taxi --finished


//View all Taxi

const viewTaxis=(req,res)=>{
  taxi.find().exec()
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

// view Taxi finished

// view Taxi by id
const viewTaxiById=(req,res)=>{
  taxi.findById({_id:req.params.id}).exec()
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



// view Taxi by id
// const deleteTaxiById=(req,res)=>{
//     taxi.findByIdAndDelete({_id:req.params.id}).exec()
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

// del Taxi by id
const deleteTaxiById=async (req,res)=>{
  let flag=0
  await taxibooking.find({taxiid:req.params.id}).exec()
  .then(data1=>{
  if(data1.length>0)
   flag=1
  })
  if(flag==0){
   await taxi.findByIdAndDelete({_id:req.params.id}).exec()
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
      msg:"Delete operation cannot be performed as we have booking for this Taxi !!"
  })
  }
  }

  
  
  //

//update Taxi by id
const editTaxiById=(req,res)=>{

  taxi.findByIdAndUpdate({_id:req.params.id},{
    ac:req.body.ac,
  
    sc:req.body.sc,
    model:req.body.model,
    brand:req.body.brand,
    contact:req.body.contact,
    email:req.body.email,
 
    driverName:req.body.driverName
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


//Taxi forgot password
const forgotPassword=(req,res)=>{
  taxi.findOne({email:req.body.email}).exec()
  .then(data=>{
    if(data==null){
      res.json({
        status:500,
        msg:"User not Found"
    })
    }
    else{
      taxi.findOneAndUpdate({email:req.body.email},{
        password:req.body.password
      }).exec().then(data=>{
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
  })
}
//finished -- forgot password




const bookTaxi=(req,res)=>{
  let dob=new Date()
  const newTaxi=new taxibooking({
      taxiid:req.params.id,
      custid:req.body.custid,
      date:req.body.date,
      dob:dob,
      time:req.body.time,
      from:req.body.from,
      to:req.body.to
  })
  newTaxi.save().then(data=>{
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


//finished -- 


//Accept taxi by book id
const acceptTaxiBooking=(req,res)=>{
  taxibooking.findByIdAndUpdate({_id:req.params.id},{
    status:"accepted"
  }).exec()
  .then(data=>{
    
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

//view my booking   taxi by taxiid
const viewTaxiBookingByTaxiId=(req,res)=>{
  let dates=new Date()
  taxibooking.find({status:"accepted",taxiid:req.params.id}).populate('custid').exec()
  .then(data=>{
    
        res.json({
          status:200,
          msg:"Updated successfully",
          data:data
      })
    }).catch(err=>{
      res.json({
          status:500,
          msg:"No Data obtained ",
          Error:err
      })
    })
}

//view taxi bokking reqs
const viewTaxiBookingReqsByTaxiId=(req,res)=>{
  let dates=new Date()
  taxibooking.find({status:"pending",taxiid:req.params.id}).populate('custid').exec()
  .then(data=>{
    
        res.json({
          status:200,
          msg:"Updated successfully",
          data:data
      })
    }).catch(err=>{
      res.json({
          status:500,
          msg:"No Data obtained ",
          Error:err
      })
    })
}


//reject taxi by book id
const rejectTaxiBooking=(req,res)=>{
  taxibooking.findByIdAndUpdate({_id:req.params.id},{
    status:"rejected"
  }).exec()
  .then(data=>{
    
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


//view my booking   taxi by custid
const viewAllTaxiBookingBycustId=(req,res)=>{
  let dates=new Date()
  taxibooking.find({custid:req.params.id,date:{$gte:dates}}).populate('taxiid').exec()
  .then(data=>{
    
        res.json({
          status:200,
          msg:"got successfully",
          data:data
      })
    }).catch(err=>{
      res.json({
          status:500,
          msg:"No Data obtained ",
          Error:err
      })
    })
}



//view my booking   taxi by taxiid
const viewBookingByid=(req,res)=>{
  let dates=new Date()
  taxibooking.findById({_id:req.params.id,}).populate('taxiid').exec()
  .then(data=>{
    
        res.json({
          status:200,
          msg:"got successfully",
          data:data
      })
    }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Updated",
          Error:err
      })
    })
}

const cancelTaxiBookingByid=async(req,res)=>{
  let date=new Date()
  let flag=0

  await taxibooking.findById({_id:req.params.id}).exec().then(datas=>{
    console.log(datas);
    if(((((datas.date).getMonth()))>date.getMonth()))
    flag=1
    else if((((((datas.date).getMonth()))==date.getMonth()))&&(datas.date).getDate()>date.getDate())
     flag=1
   // console.log("mont",(((datas.checkindate).getMonth())),"",date.getMonth(),"",(datas.checkindate));

   })
  console.log("flag",flag);
if(flag==1){
 await taxibooking.findByIdAndDelete({_id:req.params.id})
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



module.exports={registerTaxi,loginTaxi,viewTaxis,editTaxiById,
    forgotPassword,deleteTaxiById,viewTaxiById,acceptTaxiBooking,bookTaxi,viewTaxiBookingByTaxiId,viewBookingByid,
    viewAllTaxiBookingBycustId,rejectTaxiBooking,viewTaxiBookingReqsByTaxiId}