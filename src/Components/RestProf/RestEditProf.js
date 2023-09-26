import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import pic5 from "../../img/user (1).png";

import axiosInstance from "../BaseUrl";
import CustNav from "../../CustProf/CustNav";
import RestNav from "./RestNav";

function RestEditProf({ baseurl }) {
  const [value, setValue] = useState({});
  const [img, setimg] = useState("");
  const navigate = useNavigate();

  const id = localStorage.getItem("restlogid");

  useEffect(() => {
    axiosInstance.post(`/viewRestaurantById/${id}`).then((res) => {
      console.log(res);
      setValue(res.data.data);
      setimg(res.data.data.image);
    });
  }, []);

  const updatefcn = (e) => {
    e.preventDefault();

    axiosInstance
      .post(`/editRestaurantById/${id}`, value, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("Profile Updated");
          navigate("/RestViewProf");
        } else {
          alert("Updation Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changefn = (e) => {
        if (e.target.name == "image") {
          setValue({ ...value, image: e.target.files[0] });
        } else {
          setValue({ ...value, [e.target.name]: e.target.value });
        }
  };

  useEffect(() => {
    console.log(value);
  });
  return (
    <div>
      <RestNav />
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            {/* <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="200px"
                height="200px"
                style={{ objectFit: "cover" }}
                src={`${baseurl}/${img.originalname}`}
              />
              <span class="font-weight-bold">{value.name}</span>
              <span class="text-black-50">{value.email}</span>
              <span> </span>
            </div> */}
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Restaurant Profile Edit</h4>
              </div>
              <form onSubmit={updatefcn}>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={value.name}
                      name="name"
                      onChange={changefn}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Contact</label>
                    <input
                      type="number"
                      name="contact"
                      class="form-control"
                      value={value.contact}
                      onChange={changefn}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">City</label>
                    <input
                      type="text"
                      name="city"
                      class="form-control"
                      value={value.city}
                      onChange={changefn}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Country</label>
                    <input
                      type="text"
                      name="country"
                      class="form-control"
                      value={value.country}
                      onChange={changefn}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12 mb-3">
                    <label class="labels">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      value={value.email}
                      name="email"
                      onChange={changefn}
                    />
                  </div>
                  <div class="col-md-12">
                    <input
                      type="file"
                      name="image"
                      onChange={changefn}
                      // required
                    />
                  </div>
                  <div class="col-md-12  mb-4">
                    <label class="labels">Type</label>
                    <select
                      id="dropdown"
                      class="col-sm-4 form-control"
                      name="type"
                      value={value.type}
                      onChange={changefn}
                      style={{ border: "1px solid #dee2e6" }}
                    >
                      <option>Select Type </option>
                      <option value="Veg"> Veg </option>
                      <option value="non-veg">Non-Veg</option>
                      <option value="Veg & Non-Veg">Veg & Non-Veg</option>
                    </select>
                    {/* <input
                    type="text"
                    class="form-control"
                   
                    value={value.gender}
                    onChange={changefn}
                    name="gender"
                  /> */}
                  </div>

                  <button type="submit" class="btn btn-primary h-23 w-100 py-2">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestEditProf;
