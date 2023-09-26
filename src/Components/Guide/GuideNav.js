import React from "react";
import { Link } from "react-router-dom";

function GuideNav() {
  return (
    <div>
      {/* <AdminHome/> */}
      <div
        class="container-fluid position-relative p-0"
        style={{ backgroundColor: "gray" }}
      >
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" class="navbar-brand p-0">
            <h1 class="text-primary m-0">
              <i class="fa fa-map-marker-alt me-3"></i>Tourist
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
              <Link to="/GuideHome" class="nav-item nav-link">
                Home
              </Link>
              <Link to="/AddPackage" class="nav-item nav-link">
                Package
              </Link>
              <Link to="/ViewGuidePack" class="nav-item nav-link">
                View Packages
              </Link>
              <Link to="/guideViewBookings" class="nav-item nav-link">
                Bookings
              </Link>
              <Link to="/GuideProfView" class="nav-item nav-link">
                Profile
              </Link>
           
              

              {/* <Link to="/AddPackage" class="nav-item nav-link">
                Package
              </Link>
              <Link to="/ViewGuidePack" class="nav-item nav-link">
               View Package
              </Link> */}
            </div>

          
          </div>
        </nav>
      </div>
    </div>
  );
}

export default GuideNav;
