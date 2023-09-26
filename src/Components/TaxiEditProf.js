import React, { useEffect, useState } from "react";
import TaxiNav from "./TaxiNav";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import pic1 from "../img/user (1).png";

function TaxiEditProf() {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const id = localStorage.getItem("taxiid");

  useEffect(() => {
    axiosInstance.post(`/viewTaxiById/${id}`).then((res) => {
      console.log(res);
      setValue(res.data.data);
    });
  }, []);

  const updatefcn = (e) => {
    e.preventDefault();

    axiosInstance
      .post(`/editTaxiById/${id}`, value)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("Profile Updated");
          navigate("/taxi_view_profile");
        } else {
          alert("Updation Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changefn = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <TaxiNav />
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img class="rounded-circle mt-5" width="150px" src={pic1} />
              <span class="font-weight-bold">{value.Name}</span>
              <span class="text-black-50">{value.email}</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Taxi Profile Edit</h4>
              </div>
              <form onSubmit={updatefcn}>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={value.driverName}
                      name="driverName"
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
                    <label class="labels">Brand</label>
                    <input
                      type="text"
                      name="brand"
                      class="form-control"
                      value={value.brand}
                      onChange={changefn}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Model</label>
                    <input
                      type="text"
                      name="model"
                      class="form-control"
                      value={value.model}
                      onChange={changefn}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Seat Capacity</label>
                    <input
                      type="number"
                      name="sc"
                      class="form-control"
                      value={value.sc}
                      onChange={changefn}
                    />
                  </div>
                    <div class="col-md-6">
                      <label class="labels">Ac /  Non-Ac</label>
                      <select
                      id="dropdown"
                      class="col-sm-4 form-control"
                      name="ac"
                      value={value.ac}
                      onChange={changefn}
                      style={{ border: "1px solid #dee2e6" }}
                    >
                      <option>Select</option>
                      <option value="Ac"> Ac </option>
                      <option value="Non-Ac">Non-Ac</option>
                    </select>
                    </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
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
                    <label class="labels">Register No</label>
                    <input
                      type="text"
                      class="form-control"
                      value={value.regNo}
                      name="regNo"
                      onChange={changefn}
                    />
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

export default TaxiEditProf;
