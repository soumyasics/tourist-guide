import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import AdminNav from "./AdminNav";
import { Link, useNavigate } from "react-router-dom";

function ViewAdminPlace({ baseurl }) {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })

  const [place, setplace] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewAllApprovedPlaces`)
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          setplace(res.data.data);
        } else {
          setplace([]);
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const reject = (id) => {
    axiosInstance
      .post(`/deleteTouristplaceById/${id}`)
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
    <>
      <AdminNav />
      <div style={{ minHeight: "300px", margin: "15px 0px" }}>
        <div class="container text-center">
          <div class="row">
            {place.length ? (
              place.map((a) => {
                return (
                  <div class="col-3" style={{ margin: "10px 0" }}>
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
                      <h3>{a.loc}</h3>
                        <h6 class="card-title">
                          City:{a.city}
                          <br />
                          {a.district}
                        </h6>
                        <p class="card-text" style={{ color: "black" }}>
                          Distance : {a.distance}km
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          TravelMode : {a.travelmode}
                        </p>
                        <p class="card-text" style={{ color: "black" }}>
                          Location Type:{a.locType}{" "}
                        </p>
                        <div><Link to={`/admin_view_place_location/${a.lat}/${a.lon}`} ><button style={{marginRight:'2px'}} class='btn btn-success mb-1' >View Location</button></Link><br/>
                        <Link to={`/admin_edit_place/${a._id}`} ><button class='btn btn-warning mb-3' style={{marginRight:'2px'}} >Edit</button></Link>
                        <button class='btn btn-danger mb-3' onClick={()=>{reject(a._id)}} >Remove</button>
                        </div>

                      </div>
                      <div>
                        {/* <button class='btn btn-danger mb-2' onClick={()=>{handleRemove(a._id)}} >Remove</button> */}
                        {/* <Link
                      to={`/ViewTouristPlace/${a._id}`}
                      class="btn btn-success"
                      style={{ margin: "10px 10px" }}
                    >
                      View details
                    </Link> */}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 style={{ padding: "120px" }}>No Places Added</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAdminPlace;
