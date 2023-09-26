import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../../img/user (1).png";
import axiosInstance from "../BaseUrl";
import GuideProfNav from "./GuideProfNav";

function GuideEditProf() {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const id = localStorage.getItem("guidelogid");

  useEffect(() => {
    axiosInstance.post(`/viewAgencyById/${id}`).then((res) => {
      setValue(res.data.data);
    });
  }, []);

  const updatefcn = (e) => {
    e.preventDefault();

    axiosInstance
      .post(`/editAgencysById/${id}`, value)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("Profile Updated");
          navigate("/GuideProfView");
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

  useEffect(() => {
    console.log(value);
  });
  return (
    <div>
      <GuideProfNav />
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
                <h4 class="text-right">Agency Profile Edit</h4>
              </div>
              <form onSubmit={updatefcn}>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={value.Name}
                      name="Name"
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
                      type="number"
                      class="form-control"
                      value={value.regNo}
                      name="regNo"
                      onChange={changefn}
                    />
                  </div>
                  <div class="col-md-12 mb-4">
                    <label class="labels">Pincode</label>
                    <input
                      type="number"
                      class="form-control"
                      value={value.pincode                      }
                      name="pincode                      "
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

export default GuideEditProf;
