const express=require('express')
const router=express.Router()
const users=require('./User/userController')
const restrnt=require('./Restaurant/restController')
const hotels=require('./Hotel/hotelController')
const rooms=require('./Hotel/roomController')
const food=require('./Restaurant/foodController')
const guide=require('./Guide/agencyController')
const booking=require('./Guide/bookingController')
const admin=require('./Admin/adminController')
const taxi=require('./Taxi/taxiController')


//User  routes
router.post('/registerUser',users.registerUser)//done
router.post('/loginUser',users.login)//done
router.post('/viewUsers',users.viewUsers)
router.post('/editUserById/:id',users.editUserById)//done
router.post('/viewUserById/:id',users.vieUserById)//done
router.post('/viewUserById/:id',users.addPlace)
router.post('/forgotPassword',users.forgotPassword)
router.post('/delUserById/:id',users.delUserById)
router.post('/addPlace/:id',users.upload,users.addPlace)//done
router.post('/viewMyPlceasByCustId/:id',users.viewMyPlceasByCustId)//done

//Restaurant  routes
router.post('/registerRestaurant',restrnt.upload,restrnt.addRestaurant)//done
router.post('/loginRestaurant',restrnt.login)//done
router.post('/viewRestaurants',restrnt.viewRestaurants)//done
router.post('/editRestaurantById/:id',restrnt.upload,restrnt.editRestaurantById)//done
router.post('/viewRestaurantById/:id',restrnt.vieRestaurantById)
router.post('/deleteRestaurantById/:id',restrnt.delRestaurantById)//done
router.post('/forgotPassword',restrnt.forgotPassword)
router.post('/viewRestrntRequests',restrnt.viewRestrntRequests)//done
router.post('/ApproveRestrnt/:id',restrnt.ApproveRestrnt)//done

//hotel routes
router.post('/registerHotel',hotels.upload,hotels.registerHotel)//done
router.post('/loginHotel',hotels.loginHotel)//done
router.post('/viewAprvdHotels',hotels.viewApprovedHotels)
router.post('/editHotelById/:id',hotels.upload,hotels.editHotelsById)
router.post('/forgotPasswordHotel',hotels.forgotPassword)
router.post('/viewHotelById/:id',hotels.viewHotelById)
router.post('/deleteHotelById/:id',hotels.deleteHotelById)
router.post('/viewHotelReqs',hotels.viewHotelRequests)//done
router.post('/approveHotels/:id',hotels.ApproveHotel)//done
router.post('/viewHotelNames',hotels.viewHotelNames)
router.post('/addRating/:id',hotels.addRating)

//rooms
router.post('/registerRoom/:id',rooms.addRoom)//done
router.post('/viewRoomById/:id',rooms.viewRoomById)
router.post('/viewRoomsByHotelId/:id',rooms.viewRoomsByHotelId)//done
router.post('/editRoomsById/:id',rooms.editRoomsById)//done
router.post('/updateStatus/:id',rooms.updateStatus)
router.post('/deleteRoomById/:id',rooms.deleteRoomById)
router.post('/viewRoomNums',rooms.viewRoomNums)
router.post('/viewRooms',rooms.viewRooms)


//room booking
router.post('/availableRooms',rooms.availableRooms)
router.post('/bookRoom',rooms.bookRoom)
router.post('/viewBookingByCustId/:id',rooms.viewBookingByCustId)
router.post('/viewBookingByHotelid/:id',rooms.viewBookingByHotelid)
router.post('/cancelBookingByid/:id',rooms.cancelBookingByid)
router.post('/viewBookingByHotelid/:id',rooms.viewBookingByHotelid)


//food
router.post('/addFood/:restid',food.upload,food.addFood)//done
router.post('/viewFoodById/:id',food.viewFoodById)//done
router.post('/viewFoodByRest/:id',food.viewFoodByRest)//done
router.post('/editFoodById/:id',food.editFoodById)//done
router.post('/deleteFoodById/:id',food.deleteFoodById)
router.post('/viewAllFoodItems',food.viewAllFoodItemss)

//guide
router.post('/addPackage',guide.upload,guide.addPackage)//done
router.post('/editpackegesById/:id',guide.upload,guide.editpackegesById)//done
router.post('/viewAllPackages',guide.viewAllPackages)
router.post('/viewpackegesById/:id',guide.viewpackegesById)
router.post('/login',guide.login)//done
router.post('/registerAgency',guide.registerAgency)//done
router.post('/editAgencysById/:id',guide.editAgencysById)//done
router.post('/forgotPassword',guide.forgotPassword)
router.post('/viewAgencyById/:id',guide.viewAgencyById)
router.post('/ApproveAgency/:id',guide.ApproveAgency)//done
router.post('/deleteAgencyById/:id',guide.deleteAgencyById)
router.post('/deletepackegesById/:id',guide.deletepackegesById)//done
router.post('/viewAgencyRequests',guide.viewAgencyRequests)
router.post('/viewApprovedAgencies',guide.viewApprovedAgencies)
router.post('/viewAllPackagesByAgencyId/:id',guide.viewAllPackagesByAgencyId)//done
router.post('/viewAllApprovedPackagesByAgencyId/:id',guide.viewAllApprovedPackagesByAgencyId)
router.post('/viewpackegesByDest',guide.viewpackegesByDest)

//booking
router.post('/addBooking',booking.addBooking)
router.post('/viewBookingByAgencyId/:id',booking.viewBookingByAId)//==============================================nop
router.post('/viewBookingByCId/:id',booking.viewBookingByCId)//----------------------------------------------------nop
router.post('/editFoodById/:id',booking.addRating)
router.post('/UpdateBookingByCId/:id',booking.UpdateBookingByCId)
router.post('/cancelPackageBookingByid/:id',booking.cancelBookingByid)


//admin
router.post('/addPlace',admin.upload,admin.addPlace)
router.post('/viewAllPlaces',admin.viewAllPlaces)
router.post('/viewTouristPlaceById/:id',admin.viewTouristPlaceById)
router.post('/viewAllApprovedPlaces',admin.viewAllApprovedPlaces)//done
router.post('/editTouristPlaceById/:id',admin.upload,admin.editTouristPlaceById)
router.post('/deleteTouristplaceById/:id',admin.deleteTouristplaceById)
router.post('/viewAllPlacesforApproval',admin.viewAllPlacesforApproval)
router.post('/approveTouristPlaceById/:id',admin.approveTouristPlaceById)
router.post('/searchTouristPlaceByDistrict',admin.searchTouristPlaceByDistrict)//------------------------------------------
router.post('/searchTouristPlaceByDistrictAndCity',admin.searchTouristPlaceByDistrictAndCity)
router.post('/searchTouristPlaceByLoc',admin.searchTouristPlaceByLoc)


//taxi

router.post('/registerTaxi',taxi.registerTaxi)//done
router.post('/loginTaxi',taxi.loginTaxi)//done
router.post('/viewTaxis',taxi.viewTaxis)//done
router.post('/viewTaxiById/:id',taxi.viewTaxiById)
router.post('/editTaxiById/:id',taxi.editTaxiById)
router.post('/deleteTaxiById/:id',taxi.deleteTaxiById)
router.post('/forgotPassword',taxi.forgotPassword)
// taxi booking
router.post('/viewTaxiBookingByTaxiId/:id',taxi.viewTaxiBookingByTaxiId)
router.post('/viewAllTaxiBookingBycustId/:id',taxi.viewAllTaxiBookingBycustId)//done
router.post('/acceptTaxiBooking/:id',taxi.acceptTaxiBooking)//done
router.post('/rejectTaxiBooking/:id',taxi.rejectTaxiBooking)//done
router.post('/viewTaxiBookingReqsByTaxiId/:id',taxi.viewTaxiBookingReqsByTaxiId)//done
router.post('/bookTaxi/:id',taxi.bookTaxi)//done
router.post('/viewBookingByid/:id',taxi.viewBookingByid)
router.post('/cancelTaxiBookingByid/:id',taxi.cancelTaxiBookingByid)


module.exports=router