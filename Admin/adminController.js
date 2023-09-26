
const tourists=require('./touristPlaces')
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
//add new tourist plase by admin

const addPlace=(req,res)=>{
    const newCustomer=new tourists({
        district:req.body.district,
        city:req.body.city,
        loc:req.body.loc,
        travelmode:req.body.travelmode,
        distance:req.body.distance,
        locType:req.body.locType,
        image:req.file,
        lat:req.body.lat,
        lon:req.body.lon,
        addedby:'admin',
        isactive:true
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



//View all packeges

const viewAllPlaces=(req,res)=>{
    tourists.find({}).exec()
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
  const viewTouristPlaceById=(req,res)=>{
    tourists.findById({_id:req.params.id}).exec()
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
   // view packeges by id
   const searchTouristPlaceByDistrict=(req,res)=>{
    tourists.find({district:{$regex: '.*' + req.body.district + '.*' , $options: 'i'}}).exec()
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
  
  // // view packeges by id
  // const searchTouristPlaceByDistrict=(req,res)=>{
  //   tourists.find({district:req.body.district}).exec()
  //   .then(data=>{
      
  //     res.json({
  //         status:200,
  //         msg:"Data obtained successfully",
  //         data:data
  //     })
    
  // }).catch(err=>{
  //     res.json({
  //         status:500,
  //         msg:"Data not Inserted",
  //         Error:err
  //     })
  // })
  
  // }
  

  
  
  // view turist place by district and city
  const searchTouristPlaceByDistrictAndCity=(req,res)=>{
    tourists.find({district:{$regex: '.*' + req.body.district + '.*' , $options: 'i'},city:{$regex: '.*' + req.body.city + '.*' , $options: 'i'}}).exec()
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
  

  const searchTouristPlaceByLoc=(req,res)=>{
    tourists.find({loc:{$regex: '.*' + req.body.loc + '.*' , $options: 'i'}}).exec()
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
    
  // view packeges by id
  const deleteTouristplaceById=(req,res)=>{
    tourists.findByIdAndDelete({_id:req.params.id}).exec()
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
  const editTouristPlaceById=(req,res)=>{
  
    tourists.findByIdAndUpdate({_id:req.params.id},{
        district:req.body.district,
        city:req.body.city,
        loc:req.body.loc,
        travelmode:req.body.travelmode,
        distance:req.body.distance,
        locType:req.body.locType,
        lat:req.body.lat,
        lon:req.body.lon,
        image:req.file,
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
  //View all torists places added by cust to approval

const viewAllPlacesforApproval=(req,res)=>{
    tourists.find({isactive:false}).exec()
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
 //View all approved torists places added by cust 

 const viewAllApprovedPlaces=(req,res)=>{
    tourists.find({isactive:true}).exec()
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
  //approve places
  const approveTouristPlaceById=(req,res)=>{
  
    tourists.findByIdAndUpdate({_id:req.params.id},{
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
  module.exports={addPlace,viewTouristPlaceById,viewAllPlaces,editTouristPlaceById,deleteTouristplaceById,searchTouristPlaceByDistrict,searchTouristPlaceByDistrictAndCity,
    searchTouristPlaceByLoc,upload,approveTouristPlaceById,
    viewAllPlacesforApproval,viewAllApprovedPlaces}