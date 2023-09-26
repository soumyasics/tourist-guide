
const packeges=require('./packageSchema')



//hotel Registration 

const addPackage=(req,res)=>{
    const newCustomer=new packeges({
        title:req.body.title,
        destination:req.body.destination,
        cost:req.body.cost,
        days:req.body.days,
        nights:req.body.nights,
        travelmode:req.body.travelmode,
        accomodation:req.body.accomodation,
        food:req.body.food
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

const viewAllPackages=(req,res)=>{
    packeges.find({}).exec()
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
  
  
  
  // view packeges by id
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
  
  module.exports={addPackage,viewAllPackages,viewpackegesById,editpackegesById}