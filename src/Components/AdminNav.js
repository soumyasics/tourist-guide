import React from "react";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";
import img9 from "../img/logo.jpg";


function AdminNav() {
  return (
    <div>
      {/* <AdminHome/> */}
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
            <Link to="/admin_home" class="nav-item nav-link">
                Home
              </Link>
            <Link to="/admin_users" class="nav-item nav-link">
                Users
              </Link>
              <div class="nav-item dropdown">
                <Link
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Hotels
                </Link>
                <div class="dropdown-menu m-0">
                  <Link to="/admin/adminpage" class="dropdown-item">
                    Requests
                  </Link>
                  <Link to="/admin_view_hotels" class="dropdown-item">
                    View Hotels
                  </Link>
                </div>
              </div>
              <div class="nav-item dropdown">
                <Link
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Restaurants
                </Link>
                <div class="dropdown-menu m-0">
                  <Link to="/admin_view_rest_req" class="dropdown-item">
                    Requests
                  </Link>
                  <Link to="/admin_view_rest" class="dropdown-item">
                    View Restaurants
                  </Link>
                </div>
              </div>
              {/* <Link to="/admin/adminpage" class="nav-item nav-link">
                Hotel
              </Link> */}
              
              <div class="nav-item dropdown">
                <Link
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Agency
                </Link>
                <div class="dropdown-menu m-0">
                  <Link to="/admin/adminPack" class="dropdown-item">
                    Requests
                  </Link>
                  <Link to="/admin_view_agencies" class="dropdown-item">
                    View Agencies
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
                  <Link to="/AdminAddPlace" class="dropdown-item">
                    Place
                  </Link>
                  <Link to="/ViewAdminPlace" class="dropdown-item">
                    View Place
                  </Link>
                  <Link to="/admin_view_place_req" class="dropdown-item">
                    Requests
                  </Link>
                  
                </div>
                
               
              </div>
              <Link to="/admin_view_taxi" class="nav-item nav-link">
                Taxi
              </Link>
              <Link to="/" onClick={()=>{localStorage.clear();window.location.reload(false)}} class="nav-item nav-link">
                Logout
              </Link>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AdminNav;
