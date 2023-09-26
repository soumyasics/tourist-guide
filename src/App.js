import "./Asset/Style/Nav.css";
import './'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Footer from "./Components/Footer";
import About from "./Components/About";
import RestReg from "./Components/RestReg";
import RestLogin from "./Components/RestLogin";
import CustHome from "./CustProf/CustHome";
import CustViewProf from "./CustProf/CustViewProf";
import CustEditProf from "./CustProf/CustEditProf";
import RestHome from "./Components/RestProf/RestHome";
import RestViewProf from "./Components/RestProf/RestViewProf";
import RestEditProf from "./Components/RestProf/RestEditProf";
import HotelLogin from "./Components/HotelLogin";
import HotelReg from "./Components/HotelReg";
import HotelHome from "./Components/HotelProf/HotelHome";
import HotelViewProf from "./Components/HotelProf/HotelViewProf";
import HotelEditProf from "./Components/HotelProf/HotelEditProf";
import AdminNav from "./Components/AdminNav";
import AdminHome from "./Components/AdminHome";
import AdminAbout from "./Components/AdminAbout";
import Adminpage from "./Components/AdminPage";
import AddRoom from "./Components/AddRoom";
import AddFood from "./Components/AddFood";
import ViewRoom from "./Components/ViewRoom";
import ViewFood from "./Components/ViewFood";
import EditFood from "./Components/EditFood";
import EditRoom from "./Components/EditRoom";
import ViewRest from "./Components/ViewRest";
import ViewHotel from "./Components/ViewHotel";
import ViewSinglerest from "./Components/ViewSingleres";
import ViewSingleHot from "./Components/ViewSingleHot";
import GuideNav from "./Components/Guide/GuideNav";
import GuideLogin from "./Components/Guide/GuideLogin";
import AddPackage from "./Components/Guide/AddPackage";
import GuideHome from "./Components/Guide/GuideHome";
import ViewPackage from "./Components/ViewPackage";
import ViewSinglePack from "./Components/ViewSinglePack";
import AdminPack from "./Components/AdminPack";
import EditPackage from "./Components/Guide/EditPackage";
import ViewGuidePack from "./Components/Guide/ViewGuidePack";
import GuideRegister from "./Components/Guide/GuideRegister";
import GuideProfHome from "./Components/GuideProf/GuideProfHome";
import GuideProfNav from "./Components/GuideProf/GuideProfNav";
import GuideProfView from "./Components/GuideProf/GuideProfView";
import GuideProfEdit from "./Components/GuideProf/GuideProfEdit";
import AddBooking from "./Components/AddBooking";
import Payment from "./Components/Payment";
import AddPlace from "./Components/AddPlace";
import ViewPlaceCust from "./Components/ViewPlaceCust";
import AdminAddPlace from "./Components/AdminAddPlace";
import ViewAdminPlace from "./Components/ViewAdminPlace";
import ViewTouristPlace from "./Components/ViewTouristPlace";
import AdminViewHotels from "./Components/AdminViewHotels";
import AdminViewRestReq from "./Components/AdminViewRestReq";
import AdminViewRest from "./Components/AdminViewRest";
import AdminViewPlaceReq from "./Components/AdminViewPlaceReq";
import TaxiLogin from "./Components/TaxiLogin";
import TaxiReg from "./Components/TaxiReg";
import CustomerViewTaxi from "./Components/CustomerViewTaxi";
import CustomerBookTaxi from "./Components/CustomerBookTaxi";
import CustomerViewTaxiBookings from "./Components/CustomerViewTaxiBookings";
import TaxiHome from "./Components/TaxiHome";
import TaxiViewBookingReq from "./Components/TaxiViewBookingReq";
import TaxiViewBookings from "./Components/TaxiViewBookings";
import TaxiViewProfile from "./Components/TaxiViewProfile";
import TaxiEditProf from "./Components/TaxiEditProf";
import AdminViewAgencies from "./Components/AdminViewAgencies";
import AdminViewTaxi from "./Components/AdminViewTaxi";
import CustomerViewPackageBookings from "./Components/CustomerViewPackageBookings";
import CustViewAvailableRooms from "./Components/CustViewAvailableRooms";
import CustomerBookRoom from "./Components/CustomerBookRoom";
import CustomerViewHotelBooking from "./Components/CustomerViewHotelBooking";
import CustViewSearchedPlaces from "./Components/CustViewSearchedPlaces";
import Test from "./Components/Test";
import CustomerViewPlaceMap from "./Components/CustomerViewPlaceMap";
import NoMap from "./Components/NoMap";
import HotelViewBookings from "./Components/HotelViewBookings";
import GuideViewBookings from "./Components/GuideViewBookings";
import { useState } from "react";
import AdminViewMap from "./Components/AdminViewMap";
import AdminEditPlace from "./Components/AdminEditPlace";
import AdminFirst from "./Components/AdminFirst";
import AdminViewUsers from "./Components/AdminViewUsers";

function App() {
  //const [baseurl,setbaseurl] = useState('http://43.204.92.123/projects/tourist_guide/upload')
  const [baseurl,setbaseurl] = useState('http://localhost:4004')
  return (
    <BrowserRouter basename="/projects/tourist_guide">
      <div className="App">
        <Routes basename="/projects/tourist_guide">
          <Route
            exact
            path="/"
            element={<><Navbar /> <Home /></>}/>
          <Route
            path="/Home"
            element={<><Navbar /> <Home /> </>}/>
          <Route
            path="/About"
            element={
              <>
                <Navbar /> <About />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Navbar /> <Login />
              </>
            }
          />
          <Route
            path="/RestLogin"
            element={
              <>
                <Navbar />
                <RestLogin />
              </>
            }
          />
          <Route
            path="/RestReg"
            element={
              <>
                <Navbar /> <RestReg />
              </>
            }
          />
          <Route
            path="/Register"
            element={
              <>
                <Navbar /> <Register />
              </>
            }
          />
          <Route
            path="/HotelLogin"
            element={
              <>
                <Navbar />
                <HotelLogin />
              </>
            }
          />
          <Route
            path="/HotelReg"
            element={
              <>
                <Navbar />
                <HotelReg />
              </>
            }
          />
          <Route path="/CustHome" element={<CustHome/>} />
          <Route path="/CustViewProf" element={<CustViewProf />} />
          <Route path="/CustEditProf" element={<CustEditProf />} />
          <Route path="/RestHome" element={<RestHome />} />
          <Route path="/RestViewProf" element={<RestViewProf baseurl={baseurl} />} />
          <Route path="/RestEditProf" element={<RestEditProf baseurl={baseurl}/>} />
          <Route path="/HotelHome" element={<HotelHome />} />
          <Route path="/HotelViewProf" element={<HotelViewProf baseurl={baseurl}/>} />
          <Route path="/HotelEditProf" element={<HotelEditProf />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminnav" element={<AdminNav />} />
          <Route path="/admin_view_rest" element={<AdminViewRest baseurl={baseurl} />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/AdminAbout" element={<AdminAbout />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/admin/adminpage" element={<Adminpage baseurl={baseurl}/>} />
          <Route path="/admin_view_hotels" element={<AdminViewHotels baseurl={baseurl}/>} />
          <Route path="/admin_view_rest_req" element={<AdminViewRestReq />} />
          <Route path="/AddRoom" element={<AddRoom />} />
          <Route path="/AddFood" element={<AddFood baseurl={baseurl}/>} />
          <Route path="/ViewRoom" element={<ViewRoom />} />
          <Route path="/ViewFood" element={<ViewFood baseurl={baseurl}/>} />
          <Route path="/EditFood/:id" element={<EditFood />} />
          <Route path="/EditRoom/:id" element={<EditRoom />} />
          <Route path="/ViewRest" element={<ViewRest baseurl={baseurl}/>} />
          <Route path="/ViewHotel" element={<ViewHotel baseurl={baseurl}/>} />
          <Route path="/ViewSingleres/:id" element={<ViewSinglerest baseurl={baseurl} />} />
          <Route path="/ViewSingleHot/:id" element={<ViewSingleHot baseurl={baseurl}/>} />
          <Route path="/GuideNav" element={<GuideNav baseurl={baseurl}/>} />
          <Route path="/GuideLogin" element={<GuideLogin baseurl={baseurl}/>} />
          <Route path="/AddPackage" element={<AddPackage baseurl={baseurl}/>} />
          <Route path="/EditPackage/:id" element={<EditPackage baseurl={baseurl}/>} />
          <Route path="/GuideHome" element={<GuideHome baseurl={baseurl}/>} />
          <Route path="/ViewPackage" element={<ViewPackage baseurl={baseurl}/>} />
          <Route path="/ViewSinglePack/:id" element={<ViewSinglePack baseurl={baseurl} />} />
          <Route path="/admin/AdminPack" element={<AdminPack baseurl={baseurl}/>} />
          <Route path="/ViewGuidePack" element={<ViewGuidePack baseurl={baseurl}/>} />
          <Route path="/GuideRegister" element={<GuideRegister baseurl={baseurl}/>} />
          <Route path="/GuideProfHome" element={<GuideProfHome baseurl={baseurl}/>} />
          <Route path="/GuideProfNav" element={<GuideProfNav baseurl={baseurl} />} />
          <Route path="/GuideProfView" element={<GuideProfView baseurl={baseurl}/>} />
          <Route path="/GuideProfEdit" element={<GuideProfEdit baseurl={baseurl}/>} />
          <Route path="/AddBooking/:aid/:pid" element={<AddBooking />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/AddPlace" element={<AddPlace baseurl={baseurl}/>} />
          <Route path="/ViewPlaceCust" element={<ViewPlaceCust baseurl={baseurl}/>} />
          <Route path="/AdminAddPlace" element={<AdminAddPlace baseurl={baseurl}/>} />
          <Route path="/ViewAdminPlace" element={<ViewAdminPlace baseurl={baseurl} />} />
          <Route path="/admin_view_place_req" element={<AdminViewPlaceReq baseurl={baseurl} />} />
          <Route path="/ViewTouristPlace/:id" element={<ViewTouristPlace baseurl={baseurl}/>} />
          <Route path="/taxi_login" element={<TaxiLogin baseurl={baseurl} />} />
          <Route path="/taxi_register" element={<TaxiReg baseurl={baseurl}/>} />
          <Route path="/cust_view_taxi" element={<CustomerViewTaxi baseurl={baseurl}/>} />
          <Route path="/cust_book_taxi/:id" element={<CustomerBookTaxi baseurl={baseurl}/>} />
          <Route path="/cust_view_booking" element={<CustomerViewTaxiBookings baseurl={baseurl}/>} />
          <Route path="/taxi_home" element={<TaxiHome baseurl={baseurl}/>} />
          <Route path="/taxi_view_req" element={<TaxiViewBookingReq />} />
          <Route path="/taxi_view_bookings" element={<TaxiViewBookings />} />
          <Route path="/taxi_view_profile" element={<TaxiViewProfile baseurl={baseurl}/>} />
          <Route path="/taxi_edit_prof" element={<TaxiEditProf baseurl={baseurl}/>} />
          <Route path="/admin_view_agencies" element={<AdminViewAgencies baseurl={baseurl}/>} />
          <Route path="/admin_view_taxi" element={<AdminViewTaxi baseurl={baseurl}/>} />
          <Route path="/cust_view_package_booking" element={<CustomerViewPackageBookings baseurl={baseurl}/>} />
          <Route path="/customer_view_available_rooms/:id" element={<CustViewAvailableRooms />} />
          <Route path="/customer_book_rooms/:rid/:hid/:price/:room" element={<CustomerBookRoom />} />
          <Route path="/cust_view_hotel_booking" element={<CustomerViewHotelBooking />} />
          <Route path="/customer_view_searchedplaces/:details" element={<CustViewSearchedPlaces baseurl={baseurl}/>} />
          <Route path="/customer_view_place_location/:lat/:lon" element={<CustomerViewPlaceMap baseurl={baseurl}/>} />
          <Route path="/admin_view_place_location/:lat/:lon" element={<AdminViewMap baseurl={baseurl}/>} />
          <Route path="/no_map" element={<NoMap/>} />
          <Route path="/ViewBookings" element={<HotelViewBookings/>} />
          <Route path="/guideViewBookings" element={<GuideViewBookings/>} />
          <Route path="/admin_edit_place/:id" element={<AdminEditPlace/>} />
          <Route path="/admin_home" element={<AdminFirst/>} />
          <Route path="/admin_users" element={<AdminViewUsers/>} />
        </Routes>
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
