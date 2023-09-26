import React from 'react'
import { Link } from 'react-router-dom'
import img9 from "../../img/logo.jpg";


function RestNav() {
  return (
    <div>
        <div class="container-fluid position-relative p-0" >
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
                <h1 class="text-primary m-0"><i class="fa fa-map-marker-alt me-3"></i><img src={img9} />Tourist  Guide</h1>
                {/* <img src alt="Logo"/> */}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <Link to="/RestHome" class="nav-item nav-link ">Home</Link>
                    <Link to="/AddFood" class="nav-item nav-link ">Add Food</Link>
                    <Link to="/ViewFood" class="nav-item nav-link ">View Food</Link>
                    {/* <Link to="/About" class="nav-item nav-link">About</Link> */}
                    {/* <Link to="/Register" class="nav-item nav-link">Register</Link> */}
                    {/* <a href="package.html" class="nav-item nav-link">Packages</a> */}
                    <div class="nav-item dropdown">
                        <Link to='/RestViewProf' class="nav-item nav-link ">Restaurant Profile</Link>
                       
                    </div>
                    {/* <a href="contact.html" class="nav-item nav-link">Contact</a> */}
                </div>
               
                
                
            </div>
        </nav>

      
    </div>
    </div>
  )
}

export default RestNav