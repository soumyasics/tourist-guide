import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link } from "react-router-dom";

function ViewFoodCust({ baseurl }) {
  const [custrest, setcustrest] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewRestaurants`)
      .then((res) => {
        console.log(res, "view Rest");
        if (res.data.data != undefined) {
          setcustrest(res.data.data);
        } else {
          setcustrest([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <CustNav />

     
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Restaurants
            </h6>
            <h1 class="">Awesome Restaurants</h1>
          </div>
          {/* <div class="row g-4 justify-content-center">
            {custrest.length ? (
              custrest.map((a) => {
                return (
                  <div class="col-4  wow fadeInUp" data-wow-delay="0.1s" style={{width:'350px'}}>
                    <div class="">
                      <div class="overflow-hidden">
                        <img
                          class="img-fluid"
                          src={`${baseurl}/${a.image.filename}`}
                          alt=""
                        />
                      </div>
                      <div class="d-flex border-bottom">
                        <small class="flex-fill text-center border-end py-2">
                          <i class="fa fa-map-marker-alt text-primary me-2"></i>
                          {a.email}
                        </small>
                        <small class="flex-fill text-center border-end py-2">
                          <i class="fa fa-calendar-alt text-primary me-2"></i>
                          {a.contact}
                        </small>
                      </div>
                      <div class="text-center p-4">
                        <h3 class="mb-3">{a.name}</h3>

                        <p>{a.type}</p>
                        <p>
                          {a.city},{a.country}
                        </p>
                        <div class="d-flex justify-content-center mb-2">
                          <Link
                            to={`/ViewSingleres/${a._id}`}
                            href="#"
                            class="btn btn-sm btn-primary px-3 border-end"
                            style={{ borderRadius: "30px" }}
                          >
                            View Dishes
                          </Link>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Restaurants Found</h1>
            )}
          </div> */}
        </div>
      </div>
      <div style={{ minHeight: "300px", margin: "15px 0px",padding:'0 50px' }}>
        <div class="container text-center">
          <div class="row">
            {custrest.length ? (
              custrest.map((a) => {
                return (
                  <div class="col-3 mb-5" >
                    <div
                      class="card"
                      style={{ width: "300px", margin: "auto" }}
                    >
                      <img
                        src={`${baseurl}/${a.image.originalname}`}
                        class="card-img-top"
                        alt={a.image.filename}
                        height="240px"
                        style={{objectFit:'cover'}}
                      />
                      <div class="card-body">
                        <h2>{a.name}</h2>
                        <h6 class="card-title">{a.contact}</h6>
                        <p class="card-text" style={{ color: "black" }}>
                      {a.type}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                       {a.city}, {a.country}
                        </p>
                      </div>
                      <div><Link
                            to={`/ViewSingleres/${a._id}`}
                            href="#"
                            class="btn btn-sm btn-success px-3 border-end mb-4"
                            style={{ borderRadius: "30px" }}
                          >
                            View Dishes
                          </Link></div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Restaurants Available</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewFoodCust;
