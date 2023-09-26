import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link } from "react-router-dom";

function ViewPlaceCust({ baseurl }) {
  const [place, setplace] = useState([]);
  const [details, setDetails] = useState({
    district: "",
    city: "",
    loc: "",
  });
  useEffect(() => {
    console.log(details);
  }, []);
  useEffect(() => {
    axiosInstance
      .post(`/viewAllApprovedPlaces`)
      .then((res) => {
        console.log(res);
        // setplace(res.data.data);
        if (res.data.data != undefined) {
          setplace(res.data.data);
        } else {
          setplace([]);
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .post(`/searchTouristPlaceByDistrict`, { district: details.district })
      .then((res) => {
        console.log(res);
        setplace(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [details.district]);

  useEffect(() => {
    axiosInstance
      .post(`/searchTouristPlaceByLoc`, { loc: details.loc })
      .then((res) => {
        console.log(res);
        setplace(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [details.loc]);

  useEffect(() => {
    axiosInstance
      .post(`/searchTouristPlaceByDistrictAndCity`, {
        city: details.city,
        district: details.district,
      })
      .then((res) => {
        console.log(res);
        setplace(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [details.city, details.district]);

  return (
    <>
      <CustNav />
      <div>
        <div
          class="container-fluid booking pb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div class="container mt-5">
            <div class="bg-white shadow" style={{ padding: "35px" }}>
              <form style={{ display: "block" }}>
                <div class="row g-2">
                  <div class="col-md-12">
                    <div class="row g-2">
                      <div class="col-md-4">
                        <div
                          class="date"
                          id="date1"
                          data-target-input="nearest"
                        >
                          <label>District</label>
                          <input
                            type="text"
                            class="form-control datetimepicker-input"
                            data-target="#date1"
                            data-toggle="datetimepicker"
                            onChange={(e) => {
                              setDetails({
                                ...details,
                                district: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div
                          class="date"
                          id="date2"
                          data-target-input="nearest"
                        >
                          <label>City</label>
                          <input
                            type="text"
                            class="form-control datetimepicker-input"
                            data-target="#date2"
                            data-toggle="datetimepicker"
                            onChange={(e) => {
                              setDetails({
                                ...details,
                                city: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div class="col-md-4">
                        <label>Location</label>
                        <input
                          type="text"
                          class="form-control datetimepicker-input"
                          data-target="#date1"
                          data-toggle="datetimepicker"
                          onChange={(e) => {
                            setDetails({ ...details, loc: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-md-2" style={{ marginTop: "2rem" }}>
                    <Link to={`/customer_view_searchedplaces/${JSON.stringify({details})}`} >
                    <button type="button" class="btn btn-primary w-100">
                        Submit
                      </button>
                    </Link>
                      
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div style={{ minHeight: "300px", margin: "15px 0px" }}>
        <div class="container text-center">
          <div class="row">
            {place.length ? (
              place.map((a) => {
                return (
                  <div class="col-3" style={{ margin: "10px 0px" }}>
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
                      </div>
                      <div>
                        <Link
                          to={`/customer_view_place_location/${a.lat}/${a.lon}`}
                        >
                          <button class="btn btn-success mb-3">
                            View Location
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Place Added</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPlaceCust;
