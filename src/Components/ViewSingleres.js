import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link, useParams } from "react-router-dom";

function ViewSinglerest({ baseurl }) {
  const { id } = useParams();
  const [restfd, setrestfd] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewFoodByRest/${id}`)
      .then((res) => {
        console.log(res, "view Rest food");
        if (res.data.data != undefined) {
          setrestfd(res.data.data);
        } else {
          setrestfd([]);
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
            <h1 class="mb-5">Awesome Foods</h1>
          </div>
          {/* <div class="row g-4 justify-content-center">
            {restfd.length ? (
              restfd.map((a) => {
                return (
                  <div class="col-4  wow fadeInUp">
                    <div class="package-item">
                      <div
                        style={{
                          objectFit: "cover",
                          width: "80%",
                          margin: "0 auto",
                        }}
                      >
                        <img
                          class="img-fluid"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                          }}
                          src={`${baseurl}/${a.image.originalname}`}
                          alt=""
                        />
                      </div>
                      
                      <div class="text-center p-4">
                        <h3 class="mb-3">
                          {a.foodname}({a.vegornon})
                        </h3>
                        <h6 class="mb-3"> PRICE: ₹ {a.price}</h6>

                        <p>
                          {a.type}
                          <br />
                          {a.description}
                        </p>
                        <div class="d-flex justify-content-center mb-2">
                          <button
                            onClick={() => {
                              alert("Ordered");
                            }}
                            href="#"
                            class="btn btn-sm btn-primary px-3 border-end"
                            style={{ borderRadius: "30px" }}
                          >
                            Order Now
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Foods Found</h1>
            )}
          </div> */}
          <div
            style={{
              minHeight: "300px",
              margin: "15px 0px",
              padding: "0 50px",
            }}
          >
            <div class="container text-center">
              <div class="row">
                {restfd.length ? (
                  restfd.map((a) => {
                    return (
                      <div class="col-3 mb-5">
                        <div
                          class="card"
                          style={{ width: "300px", margin: "auto" }}
                        >
                          <img
                            src={`${baseurl}/${a.image.originalname}`}
                            class="card-img-top"
                            alt={a.image.filename}
                            height="240px"
                            style={{ objectFit: "cover" }}
                          />
                          <div class="card-body">
                            <h2>{a.foodname}</h2>
                            <h6 class="card-title">({a.vegornon})</h6>
                            <p class="card-text" style={{ color: "black" }}>
                              {a.type}
                            </p>
                            <p class="card-text" style={{ color: "black" }}>
                              <b>₹ {a.price}</b>
                            </p>
                            <p class="card-text" style={{ color: "black" }}>
                              {a.description}
                            </p>
                          </div>
                          <div>
                            <button
                              onClick={() => {
                                alert("Ordered");
                              }}
                              href="#"
                              class="btn btn-sm btn-success mb-4 px-3 border-end"
                              style={{ borderRadius: "30px" }}
                            >
                              Order Now
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1 style={{padding:'50px'}} >No Food Available</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSinglerest;
