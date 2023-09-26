const food = require('./foodSchema')
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
//add fod

const   addFood = (req, res) => {


  console.log(req.params.restid);
  console.log(req.body);
  const newFood = new food({
    foodname: req.body.foodname,
    vegornon: req.body.vegornon,
    price: req.body.price,
    type: req.body.type,
    restid: req.params.restid,
    image: req.file,
    description: req.body.description,
  })
  newFood.save().then(data => {
    res.json({
      status: 200,
      msg: "Inserted successfully",
      data: data
    })
  }).catch(err => {
    res.json({
      status: 500,
      msg: "Data not Inserted",
      Error: err
    })
  })
}
//food Registration -- finished


// view all food
const viewAllFoodItemss = (req, res) => {
  food.find().populate('restid').exec()
    .then(data => {
      if (data.length > 0) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data
        })
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained "
        })
      }
    }).catch(err => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err
      })
    })

}


//view finished

// view  food by id
const  viewFoodById = (req, res) => {

  food.findById({ _id: req.params.id }).populate('restid').exec()
    .then(data => {
      console.log(data);
      if (data) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data
        })
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained "
        })
      }
    }).catch(err => {
      res.json({
        status: 500,
        msg: "something went wrong",
        Error: err
      })
    })

}


//view finished

//update food by id
const editFoodById = (req, res) => {



  food.findByIdAndUpdate({ _id: req.params.id }, {
    foodname: req.body.foodname,
    vegornon: req.body.vegornon,
    price: req.body.price,
    type: req.body.type,

    image: req.file,
    package: req.body.package,
    description: req.body.description
  })
    .exec().then(data => {
      res.json({
        status: 200,
        msg: "Updated successfully"
      })
    }).catch(err => {
      res.json({
        status: 500,
        msg: "Data not Updated",
        Error: err
      })
    })
}


//delete food by id
const deleteFoodById = (req, res) => {



  food.findByIdAndDelete({ _id: req.params.id })
    .exec().then(data => {
      res.json({
        status: 200,
        msg: "removed successfully"
      })
    }).catch(err => {
      res.json({
        status: 500,
        msg: "Data not removed",
        Error: err
      })
    })
}
//view Food By rest id
const viewFoodByRest = (req, res) => {
  console.log(req.body.id);
  food.find({ restid: req.params.id }).exec()
    .then(data => {
      console.log(data);
      if (data) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data
        })
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained "
        })
      }
    }).catch(err => {
      res.json({
        status: 500,
        msg: "something went wrong",
        Error: err
      })
    })

}

module.exports = {
  addFood, upload, viewAllFoodItemss, editFoodById, viewFoodById, viewFoodByRest,
  deleteFoodById
}