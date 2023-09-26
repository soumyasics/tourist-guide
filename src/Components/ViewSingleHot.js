import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import CustNav from "../CustProf/CustNav";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewSinglerest() {
  const { id } = useParams();
  const [hotl, sethotl] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewRoomsByHotelId/${id}`)
      .then((res) => {
        console.log(res, "view hotl ");
        if (res.data.data != undefined) {
          sethotl(res.data.data);
        } else {
          sethotl([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [room, setRoom] = useState({
    checkindate: "",
    checkoutdate: "",
    type: "",
    hotel_id:id
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(room);

    axiosInstance
      .post(`/availableRooms`, room)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          // setData(res.data.data)
          navigate(
            `/customer_view_available_rooms/${encodeURIComponent(
              JSON.stringify({ room, data: res.data.data })
            )}`
          );
        }
      })
      .catch((err) => {
        console.log(err);
        alert("failed");
      });
  };
  return (
    <div>
      <CustNav />
      {/* <div class="position-relative w-75 mx-auto animated slideInDown" style={{background:'red',padding:'10px',marginTop:'110x'}}>
        <input
          class="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
          type="text"
          placeholder="Eg: Thailand"
        />
        <button
          type="button"
          class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
          style={{ marginTop: "7px" }}
        >
          Search
        </button>
      </div> */}
      <div>
        <div
          class="container-fluid booking pb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div class="container mt-5">
            <div class="bg-white shadow" style={{ padding: "35px" }}>
              <form onSubmit={onSubmit} style={{ display: "block" }}>
                <div class="row g-2">
                  <div class="col-md-10">
                    <div class="row g-2">
                      <div class="col-md-4">
                        <div
                          class="date"
                          id="date1"
                          data-target-input="nearest"
                        >
                          <label>Checkin</label>
                          <input
                            type="date"
                            class="form-control datetimepicker-input"
                            placeholder="Check in"
                            data-target="#date1"
                            data-toggle="datetimepicker"
                            min={new Date().toISOString().split('T')[0]}
                            onChange={(e) => {
                              setRoom({ ...room, checkindate: e.target.value });
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div
                          class="date"
                          id="date2"
                          data-target-input="nearest"
                        >
                          <label>Checkout</label>
                          <input
                            type="date"
                            class="form-control datetimepicker-input"
                            placeholder="Check out"
                            data-target="#date2"
                            data-toggle="datetimepicker"
                            min={new Date().toISOString().split('T')[0]}
                            onChange={(e) => {
                              setRoom({
                                ...room,
                                checkoutdate: e.target.value,
                              });
                            }}
                            required
                          />
                        </div>
                      </div>
                      {/* <div class="col-md-3">
                        <div
                          class="date"
                          id="date2"
                          data-target-input="nearest"
                        >
                          <label>City</label>
                          <input
                            type="text"
                            class="form-control datetimepicker-input"
                            placeholder="City"
                            data-target="#date2"
                            data-toggle="datetimepicker"
                            // onChange={(e) => {
                            //   setRoom({ ...room, city: e.target.value });
                            // }}
                            required
                          />
                        </div>
                      </div> */}
                      <div class="col-md-4">
                        <label>Type</label>
                        <select
                          class="form-select"
                          onChange={(e) => {
                            setRoom({ ...room, type: e.target.value });
                          }}
                          required
                        >
                          <option selected>select type</option>
                          <option value="Single room">Single room</option>
                          <option value="Double room">Double room</option>
                          <option value="Suit room">Suit room</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2" style={{ marginTop: "2rem" }}>
                    
                      <button type="submit" class="btn btn-primary w-100">
                        Submit
                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <div class="container text-center">
          <div class="row">
            {hotl.length ? (
              hotl.map((a) => {
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
                        <h4 class="card-title" style={{ color: "Green" }}>
                          Room Number: {a.roomNo}
                        </h4>
                        <h3 class="card-text">Price: ₹{a.price}<small>/day</small></h3>
                        <p class="card-text">
                          Type: {a.type} ({a.ac})
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
                    <h5 class="card-title">No Rooms Available</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSinglerest;
