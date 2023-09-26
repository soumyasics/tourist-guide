import React, { useEffect, useState } from 'react'
import CustNav from '../CustProf/CustNav'
import axiosInstance from './BaseUrl';
import { Link } from 'react-router-dom';

function CustomerViewTaxi() {

    const[data,setData]=useState([])
    useEffect(()=>{
        axiosInstance
        .post(`/viewTaxis`)
        .then((res) => {
          console.log(res, "view hotel");
          if (res.data.data != undefined) {
            setData(res.data.data);
          } else {
            setData([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },[])

  return (
    <div>
      <CustNav/>
      {/* <div style={{marginTop:"20px"}}>
          <div class="container text-center">
                      <div class="row">
                        {data.length ? (
                          data.map((a) => {
                            return (
                              <div className="col" style={{margin:"10px 0px"}}>
                                <div class="card" style={{ width: '18rem' ,backgroundColor:"white",boxShadow: '1px 2px 2px 2px grey' }}>
                                  <div class="card-body">
                                    <h4 class="card-title" style={{color:'Green'}}>{a.driverName}</h4>
                                    <p class="card-text">
                                   {a.email}
                                    </p>
                                    <p class="card-text">
                                    RegNo: {a.regNo}
                                    </p>
                                    <p class="card-text">
                                    Brand: {a.brand}<br/>Model: {a.model}({a.ac})<br/>Seat Capacity: {a.sc}
                                    </p>
                                    <p class="card-text">
                                    Contact: {a.contact}
                                    </p>
                                    <p class="card-text">
                                    City: {a.city}
                                    </p>
                                   <Link to={`/cust_book_taxi/${a._id}`} class="btn btn-danger">
                                    Book Now
                                   </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="col">
                            <div class="card" style={{ width: "18rem;" }}>
                              <div class="card-body">
                                <h5 class="card-title">No Taxi Services Available</h5>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
          </div> */}
          <div style={{ minHeight: "300px", margin: "15px 0px",padding:'50px' }}>
        <div class="container text-center">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Taxi
            </h6>
            <h1 class="mb-5">Taxi Services</h1>
          </div>
          <div class="row">
            {data.length ? (
              data.map((a) => {
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
                        style={{objectFit:'cover'}}
                      /> */}
                      <div class="card-body">
                        <h2>{a.driverName}</h2>
                        <h6 class="card-title">{a.contact}</h6>
                        {/* <p class="card-text text-success" style={{ color: "black" }}>
                        <b>₹ {a.cost}</b>
                        </p> */}
                        <p class="card-text" style={{ color: "black" }}>
                        Brand: {a.brand}<br/>Model: {a.model}({a.ac})<br/>Seat Capacity: {a.sc}
                        </p>
                      </div>
                      <div> <Link to={`/cust_book_taxi/${a._id}`} class="btn btn-success mb-4">
                                    Book Now
                                   </Link></div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Taxi Services Available</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerViewTaxi
