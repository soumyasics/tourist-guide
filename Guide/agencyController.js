
const packeges=require('./packageSchema')
const agencySchema = require('./agencySchema')
const jwt=require('jsonwebtoken')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage }).single('image')


//hotel Registration 

const registerAgency=(req,res)=>{
    const newCustomer=new agencySchema({
        Name:req.body.Name,
        regNo:req.body.regNo,
        city:req.body.city,
        country:req.body.country,
        pincode:req.body.pincode,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password
    })
    newCustomer.save().then(data=>{
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
//Hotel Registration -- finished

//Login Agency 
const secret = 'your-secret-key'; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};
const login = (req, res) => {
  
  
    const { email, password } = req.body;
  
    agencySchema.findOne({ email }).exec().then (user => {
     
  
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


//Login agencySchema --finished


//View all agency

const viewApprovedAgencies=(req,res)=>{
  agencySchema.find({isactive:true }).exec()
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

// view Hotels finished

// view hotel by id
const viewAgencyById=(req,res)=>{
  agencySchema.findById({_id:req.params.id}).exec()
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
const deleteAgencyById=async(req,res)=>{

  let flag=0
await booking.find({aid:req.params.id}).exec()
.then(data1=>{
if(data1.length>0)
 flag=1
})
if(flag==0){
  await  agencySchema.findByIdAndDelete({_id:req.params.id}).exec()
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
      msg:"Delete operation cannot be performed as we have booking for this Agency  !!"
  })
  }
}



// view hotel by id
// const deleteAgencyById=(req,res)=>{
//     agencySchema.findByIdAndDelete({_id:req.params.id}).exec()
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
  
  
  //

//update Hotels by id
const editAgencysById=(req,res)=>{

  agencySchema.findByIdAndUpdate({_id:req.params.id},{
    Name:req.body.name,
    regNo:req.body.regNo,
    city:req.body.city,
    country:req.body.country,
    pincode:req.body.pincode,
    contact:req.body.contact,
    email:req.body.email
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


//Customer forgot password
const forgotPassword=(req,res)=>{
  agencySchema.findOne({email:req.body.email}).exec()
  .then(data=>{
    if(data==null){
      res.json({
        status:500,
        msg:"User not Found"
    })
    }
    else{
      agencySchema.findOneAndUpdate({email:req.body.email},{
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

//View all  hotel requests

const viewAgencyRequests=(req,res)=>{
  agencySchema.find({isactive:false}).exec()
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
        msg:"Data not obtained",
        Error:err
    })
})

}
//Hotel Agency by admin
const ApproveAgency=(req,res)=>{

    
  agencySchema.findByIdAndUpdate({_id:req.params.id},{
    isactive:true
    })
.exec().then(data=>{
    packeges.updateMany({aid:req.params.id},{isactive:true}).exec().then(data=>{
        res.json({
            status:200,
            msg:"Updated successfully"
        })
    })}).catch(err=>{
        res.json({
            status:500,
            msg:"Data not Updated",
            Error:err
        })

}).catch(err=>{
  res.json({
      status:500,
      msg:"Data not Updated",
      Error:err
  })
})
}




//package Registration 

const addPackage=async (req,res)=>{
let val=false
await agencySchema.findById({_id:req.body.aid}).exec().then(data=>{
if(data.isactive)
    val=true
})

.catch(err=>{
    res.json({
        status:500,
        msg:"Data not Inserted",
        Error:err
    })
})

    const newCustomer=new packeges({
        title:req.body.title,
        destination:req.body.destination,
        cost:req.body.cost,
        days:req.body.days,
        nights:req.body.nights,
        travelmode:req.body.travelmode,
        accomodation:req.body.accomodation,
        food:req.body.food,
        aid:req.body.aid,
        image:req.file,
        isactive:val
    })
   await newCustomer.save().then(data=>{
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



//View all packeges

const viewAllPackages=(req,res)=>{
    packeges.find({isactive:true}).exec()
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


//View all packeges for customer

const viewAllPackagesByAgencyId=(req,res)=>{
    packeges.find({aid:req.params.id}).exec()
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

  const viewAllApprovedPackagesByAgencyId=(req,res)=>{
    packeges.find({aid:req.params.id,isactive:true}).exec()
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
  

  
  // view packeges finished
  
  // view packeges by id
  const viewpackegesById=(req,res)=>{
    packeges.findById({_id:req.params.id}).exec()
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
  
  
  
  // remove packeges by id
  const deletepackegesById=(req,res)=>{
    packeges.findByIdAndDelete({_id:req.params.id}).exec()
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
  
  //update packeges by id
  const editpackegesById=(req,res)=>{
  
    packeges.findByIdAndUpdate({_id:req.params.id},{
        title:req.body.title,
        destination:req.body.destination,
        cost:req.body.cost,
        days:req.body.days,
        nights:req.body.nights,
        travelmode:req.body.travelmode,
        accomodation:req.body.accomodation,
        image:req.file,
        food:req.body.food
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
  

  
  // view packeges by destination
  const viewpackegesByDest=(req,res)=>{
    packeges.find({destination:req.body.destination}).sort({cost: 1}).exec()
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
  


  module.exports={addPackage,viewAllPackages,viewpackegesById,editpackegesById,registerAgency,editAgencysById,login,ApproveAgency,viewpackegesByDest
   , viewAgencyById,viewAgencyRequests,viewApprovedAgencies,forgotPassword,deleteAgencyById,deletepackegesById,viewAllPackagesByAgencyId,viewAllApprovedPackagesByAgencyId,upload}