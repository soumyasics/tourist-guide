import React from 'react'
import { Link } from 'react-router-dom'
import img9 from "../img/logo.jpg";


function TaxiNav() {
  return (
    <div>
      <div
        class="container-fluid position-relative p-0"
 
      >
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" class="navbar-brand p-0">
            <h1 class="text-primary m-0">
              <i class="fa fa-map-marker-alt me-3"></i><img src={img9} />Tourist Guide
            </h1>
            {/* <img src alt="Logo"/> */}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              <Link to="/taxi_home" class="nav-item nav-link ">
                Home
              </Link>
              <Link to="/taxi_view_req" class="nav-item nav-link ">
                Requests
              </Link>
              <Link to="/taxi_view_bookings" class="nav-item nav-link ">
                Bookings
              </Link>
              <Link to="/taxi_view_profile" class="nav-item nav-link ">
                Profile
              </Link>
              {/* <div class="nav-item dropdown">
                <Link
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Taxi
                </Link>
                <div class="dropdown-menu m-0">
                  <Link to="/cust_view_taxi" class="dropdown-item">
                    View Taxi
                  </Link>
                  <Link to="/cust_view_booking" class="dropdown-item">
                    View Booking
                  </Link>
                </div>
              </div>
              <div class="nav-item dropdown">
                <Link
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Place
                </Link>
                <div class="dropdown-menu m-0">
                  <Link to="/AddPlace" class="dropdown-item">
                    Add Place
                  </Link>
                  <Link to="/ViewPlaceCust" class="dropdown-item">
                    View Place
                  </Link>
                </div>
              </div>

             
              <div class="nav-item dropdown">
                <Link to="/CustViewProf" class="nav-item nav-link ">
                  Customer Profile
                </Link>
              </div> */}
              {/* <a href="contact.html" class="nav-item nav-link">Contact</a> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default TaxiNav
