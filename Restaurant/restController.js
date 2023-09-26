

const restrnt=require('./restSchema')
const jwt=require('jsonwebtoken')
const foodSchema=require('./foodSchema')
const secret = 'your-secret-key'; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};
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


// Registration 

const addRestaurant=(req,res)=>{
    const newUser=new restrnt({
        name:req.body.name,
        
        city:req.body.city,
        country:req.body.country,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password,
       type:req.body.type,
       image:req.file
      
    })
    newUser.save().then(data=>{
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
// Registration -- finished
//Login  
const login = (req, res) => {
  
  const { email, password } = req.body;

  restrnt.findOne({ email }).exec().then (user => {
   

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

//Login  --finished



//View all 

const viewRestaurants=(req,res)=>{
  restrnt.find({isactive:true}).exec()
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

// view  finished


//update Restaurant by id
const editRestaurantById=(req,res)=>{

  
    
  restrnt.findByIdAndUpdate({_id:req.params.id},{
    name:req.body.name,
   
    city:req.body.city,
    country:req.body.country,
    contact:req.body.contact,
    email:req.body.email,
   type:req.body.type,
   image:req.file
  
    })
.exec().then(data=>{
  res.json({
      status:200,
      msg:"Updated successfully"
  })
}).catch(err=>{
  console.log(err);
  res.json({
      status:500,
      msg:"Data not Updated",
      Error:err
  })
})
}

//View  customer by ID

const vieRestaurantById=(req,res)=>{
  restrnt.findOne({_id:req.params.id}).exec()
  .then(data=>{

    console.log(data);
    res.json({
        status:200,
        msg:"Data obtained successfully",
        data:data
    })
  
}).catch(err=>{
  console.log(err);
    res.json({
        status:500,
        msg:"No Data obtained",
        Error:err
    })
})

}

//del  customer by ID

// const delRestaurantById=(req,res)=>{
//   restrnt.findByIdAndDelete({_id:req.params.id}).exec()
//   .then(data=>{

//     console.log(data);
//     res.json({
//         status:200,
//         msg:"Data obtained successfully",
//         data:data
//     })
  
// }).catch(err=>{
//   console.log(err);
//     res.json({
//         status:500,
//         msg:"No Data obtained",
//         Error:err
//     })
// })
// }
//del  Restauranr by ID

const delRestaurantById=async(req,res)=>{

  await foodSchema.deleteMany({restid:req.params.id}).exec().then(daaa=>{
  console.log("deleted");
  })
    restrnt.findByIdAndDelete({_id:req.params.id}).exec()
    .then(data=>{
  
      console.log(data);
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  }
  
  
  


//rest forgot password
const forgotPassword=(req,res)=>{
  restrnt.findOne({email:req.body.email}).exec()
  .then(data=>{
    if(data==null){
      res.json({
        status:500,
        msg:"User not Found"
    })
    }
    else{
      restrnt.findOneAndUpdate({email:req.body.email},{
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



//View all  Restrnt requests

const viewRestrntRequests=(req,res)=>{
  restrnt.find({isactive:false}).exec()
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
//Restrnt Approval by admin
const ApproveRestrnt=(req,res)=>{

    
  restrnt.findByIdAndUpdate({_id:req.params.id},{
    isactive:true
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

module.exports={addRestaurant,delRestaurantById,login,vieRestaurantById,editRestaurantById,
  viewRestaurants,forgotPassword,viewRestrntRequests,ApproveRestrnt,upload}