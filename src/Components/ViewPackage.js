import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link } from "react-router-dom";

function ViewPackage({ baseurl }) {
  const [pack, setpackage] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewApprovedAgencies`)
      .then((res) => {
        console.log(res, "view Package");
        if (res.data.data != undefined) {
          setpackage(res.data.data);
        } else {
          setpackage([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <CustNav />

      {/* <div class="container text-center">
        <div class="row">
          {pack.length ? (
            pack.map((a) => {
              return (
                <div className="col" style={{ margin: "10px 0px" }}>
                  <div
                    class="card"
                    style={{
                      width: "18rem",
                      backgroundColor: "white",
                      boxShadow: "1px 2px 2px 2px grey",
                    }}
                  >
                   
                    <div class="card-body">
                      <h2 class="card-title" style={{ color: "Green" }}>
                        {a.Name}
                      </h2>

                      <h6 class="card-text">Reg No: {a.regNo}</h6>
                      <h6 class="card-text">Contact {a.contact}</h6>

                      <p class="card-text">
                        {a.city}, {a.country}
                      </p>
                      
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col">
              <div class="card" style={{ width: "18rem;" }}>
                <div class="card-body">
                  <h5 class="card-title">No Packages Available</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> */}
      <div style={{ minHeight: "300px", margin: "15px 0px",padding:'50px' }}>
        <div class="container text-center">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Packages
            </h6>
            <h1 class="mb-5">Our Packages</h1>
          </div>
          <div class="row">
            {pack.length ? (
              pack.map((a) => {
                return (
                  <div class="col-3 mb-5" >
                    <div
                      class="card"
                      style={{ width: "300px", margin: "auto" }}
                    >
                      {/* <img
                        src={`${baseurl}/${a.image.originalname}`}
                        class="card-img-top"
                        alt={a.image.filename}
                        height="240px"
                      /> */}
                      <div class="card-body">
                        <h2>{a.Name}</h2>
                        <h6 class="card-title">Reg No {a.regNo}</h6>
                        <p class="card-text" style={{ color: "black" }}>
                          {a.contact}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          {a.city}, {a.country}
                        </p>
                      </div>
                      <div><Link
                        to={`/ViewSinglePack/${a._id}`}
                        class="btn btn-success mb-4"
                      >
                        choose
                      </Link></div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Packages Available</h1>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ViewPackage;
