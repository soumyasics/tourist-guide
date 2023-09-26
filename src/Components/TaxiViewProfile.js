import React, { useEffect, useState } from 'react'
import TaxiNav from './TaxiNav'
import axiosInstance from './BaseUrl';
import img1 from "../img/user-verification-symbol-for-interface.png";
import { Link, useNavigate } from 'react-router-dom';


function TaxiViewProfile() {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('taxiid')==null){
      navigate('/')
    }
  });
    const [gset, setdata] = useState({});
    const id = localStorage.getItem("taxiid");

  useEffect(() => {
    // const storedUser = localStorage.getItem("users");
    console.log(id);

    axiosInstance.post(`/viewTaxiById/${id}`).then((res) => {
        console.log(res);
      setdata(res.data.data);
    });
  }, []);

  return (
    <div>
      <TaxiNav/>
      <div  >
      <section
        class=""
       


      >
        <div class="container3 py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-3" style={{ borderRadius: ".5rem;" }}>
                <div class="row g-0">
                  
                  <div class="col-md-12">
                    <div class="card-body p-4">
                      <h2>{gset.driverName}</h2>

                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email:</h6>
                          <p class="text-muted">{gset.email}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Contact:</h6>
                          <p class="text-muted">{gset.contact}</p>
                        </div>
                      </div>
                      {/* <h6>Projects</h6> */}
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        {/* <div class="col-6 mb-3">
                          <h6>Password:</h6>
                          <p class="text-muted">{gset.password}</p>
                        </div> */}

                        <div class="col-6 mb-3">
                          <h6>RegNo:</h6>
                          <p class="text-muted">{gset.regNo}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Brand:</h6>
                          <p class="text-muted">{gset.brand}</p>
                        </div>
                        <hr class="mt-0 mb-4" />
                        <div class="col-6 mb-3">
                          <h6>Model:</h6>
                          <p class="text-muted">{gset.model}({gset.ac})</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Seat Capacity:</h6>
                          <p class="text-muted">{gset.sc}</p>
                        </div>
                        <div class="col-6 mb-3"></div>
                        <hr class="mt-0 mb-4" />
                      </div>
                      {/* <div class="d-flex justify-content-start">
                        <a href="#!">
                          <i class="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i class="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i class="fab fa-instagram fa-lg"></i>
                        </a>
                      </div> */}
                      <Link to="/taxi_edit_prof">
                        <button
                          type="submit"
                          class="btn btn-success h-23 w-50 py-2 "
                        >
                          Edit
                        </button>
                      </Link>
                      <Link to="/">
                        <button
                          type="submit"
                          class="btn btn-danger h-23 w-50 py-2"
                          onClick={()=>{localStorage.clear();window.location.reload(false)}}
                        >
                          Logout
                        </button>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default TaxiViewProfile
