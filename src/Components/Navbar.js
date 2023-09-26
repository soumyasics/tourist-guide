import React from "react";
import { Link } from "react-router-dom";
import img9 from "../img/logo.jpg";

function Navbar() { 
  return (
    <div>
      <div class="container-fluid bg-dark px-9 d-none d-lg-block">
        <div class="row gx-0">
          <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            
          </div>
          <div class="col-lg-4 text-center text-lg-end"></div>
        </div>
      </div>
      <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" class="navbar-brand p-0">
            <h1 class="text-primary m-0">
              <img src={img9} />
              Tourist Guide
            </h1>
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
              <Link to="/Home" class="nav-item nav-link ">
                Home
              </Link>
              <Link to="/About" class="nav-item nav-link">
                About
              </Link>
              {/* <Link to="/Register" class="nav-item nav-link">Register</Link> */}
              {/* <a href="package.html" class="nav-item nav-link">Packages</a> */}
              <div class="nav-item dropdown">
                <Link
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Regsiter
                </Link>
                <div class="dropdown-menu m-0">
                  <Link to="/Register" class="dropdown-item">
                    Customer
                  </Link>
                  <Link to="/RestReg" class="dropdown-item">
                    Restaurant
                  </Link>
                  <Link to="/HotelReg" class="dropdown-item">
                    Hotel
                  </Link>
                  <Link to="/GuideRegister" class="dropdown-item">
                    Agency
                  </Link>
                  <Link to="/taxi_register" class="dropdown-item">
                    Taxi
                  </Link>
                </div>
              </div>
              <div class="nav-item dropdown">
                <Link
                  className="btn btn-primary rounded-pill py-2 px-4"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  login
                </Link>
                <div class="dropdown-menu m-0">
                  <Link to="/Login" class="dropdown-item">
                    {" "}
                    Customer
                  </Link>
                  <Link to="/RestLogin" class="dropdown-item">
                    Restaurant
                  </Link>
                  <Link to="/HotelLogin" class="dropdown-item">
                    Hotel{" "}
                  </Link>
                  <Link to="/GuideLogin" class="dropdown-item">
                    Agency
                  </Link>
                  <Link to="/taxi_login" class="dropdown-item">
                    Taxi
                  </Link>
                </div>
              </div>

              {/* <a href="contact.html" class="nav-item nav-link">
                Contact
              </a> */}
            </div>
            {/* <div class="nav-item dropdown">
                        <Link  className="btn btn-primary rounded-pill py-2 px-4" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">login</Link>
                        <div class="dropdown-menu m-0">
                            
                            <Link to="/Login" class="dropdown-item" > Customer Login</Link>
                            <Link to="/RestLogin" class="dropdown-item">Restaurant Login</Link>
                             <Link to="/HotelLogin" class="dropdown-item">Hotel Login</Link>
                          
                        </div>
                    </div>
                 */}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
