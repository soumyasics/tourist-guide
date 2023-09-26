import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axiosInstance from "./BaseUrl";
import { useNavigate } from "react-router-dom";

function AdminViewRestReq() {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })
  const [hoteldata, sethoteldata] = useState([]);
  const [apphoteldata, setapphoteldata] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewRestrntRequests`)
      .then((res) => {
        console.log(res);
        if (res.data.data != undefined) {
          sethoteldata(res.data.data);
        } else {
          setapphoteldata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleHotelApp = (id) => {
    axiosInstance
      .post(`/ApproveRestrnt/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Approved");
          window.location.reload();
        } else {
          alert("Failed");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Failed");
      });
  };
  const reject = (id) => {
    axiosInstance
      .post(`/deleteRestaurantById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Rejected");
          window.location.reload();
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Failed");
      });
  };
  return (
    <div>
      <AdminNav />
      {/* <div className="productdiv1" style={{ minHeight: "400px" }}>
        <div class="container-xxl py-5">
          <div class="container">
            <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Welcome to Admin
            </h1>
            <div
              class="tab-class text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5"></ul>

              {hoteldata.length ? (
                hoteldata.map((a) => {
                  return (
                    <div class="container">
                      <div class="row">
                        <hr />
                        <div class="col">
                          <span
                            class="text-truncate me-3"
                            style={{ fontSize: "1.3rem" }}
                          >
                            <i class="fa fa-map-marker-alt text-primary me-2"></i>
                            Hotel Name: {a.name}
                          </span>
                        </div>
                        <div class="col">
                          <span
                            class="text-truncate me-3"
                            style={{ fontSize: "1.3rem" }}
                          >
                            <i class="fa fa-map-marker-alt text-primary me-2"></i>
                            Email: {a.email}
                          </span>
                        </div>
                        <div class="col">
                          <span
                            class="text-truncate me-3"
                            style={{ fontSize: "1.3rem" }}
                          >
                            <i class="far fa-clock text-primary me-2"></i>
                            Contact: {a.contact}
                          </span>
                        </div>
                        <div class="col">
                          <span
                            class="text-truncate me-0"
                            style={{ fontSize: "1.3rem" }}
                          >
                            <i class="far fa-money-bill-alt text-primary me-2"></i>
                            Type:{a.type}
                          </span>
                        </div>
                        <div className="col">
                          <button
                            style={{ position: "relative", bottom: "5px",marginRight:'5px' }}
                            type="button"
                            class="btn btn-success"
                            onClick={() => handleHotelApp(a._id)}
                          >
                            Approve
                          </button>
                          <button
                            style={{ position: "relative", bottom: "5px" }}
                            type="button"
                            class="btn btn-danger"
                            onClick={() => reject(a._id)}
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <div class="text-start ps-4">
                        <h5 class="mb-3"> No Restaurants to approve</h5>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
      <div style={{ padding: "80px 40px" }}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Type</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {hoteldata.length ? (
              hoteldata.map((a) => {
                return (
                  <tr>
                    <th scope="row">
                      {a.name}({a.contact})
                    </th>
                    <td>{a.email}</td>
                    <td>{a.type}</td>
                    <td>{a.city}</td>
                    <td>{a.country}</td>
                    <td>
                      <button
                        class="btn btn-success"
                        style={{marginRight:'5px'}}
                        onClick={() => {
                          handleHotelApp(a._id);
                        }}
                      >
                        Accept
                      </button>
                      <button
                        class="btn btn-danger"
                        onClick={() => {
                          reject(a._id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1 style={{padding:'50px'}} >No Requests</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminViewRestReq;
