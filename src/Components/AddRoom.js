import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import HotelNav from "./HotelProf/HotelNav";
import axiosInstance from "./BaseUrl";

function AddRoom() {
  const id = localStorage.getItem("hotellogid");
  const [register, setRegister] = useState({
    roomNo: "",
    ac: "",
    type: "",
    price: "",
  });
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(register);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    axiosInstance
      .post(`/registerRoom/${id}`, register)
      .then((result) => {
        console.log("data entered", result);
        if(result.status==200){
          alert("Add Rooms Successfully")
          window.location.reload()
        }
        else{
          alert("Failed to Add")
        }
      })
      .catch((error) => {
        console.log("err", error);
        alert("Failed to Add")
      });
  };
  return (
    <div>
      <HotelNav />
      <div>
        <body id="signup">
          <main class="container1">
            <div class="back"></div>
            <div
              class="brand"
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                backgroundSize:"cover",
              }}
            >
              <div class="logo">
                <img
                  height="64"
                  src="https://i.imgur.com/E3uTxXY.png"
                  alt="Panda Logo"
                />
                <h1>
                  <span class="name">
                    <span>ADVENTURE</span>
                    <span> </span>
                  </span>
                  IS OUT THERE
                </h1>
              </div>
            </div>
            <div class="formWrapper">
              <div class="form">
                <h2>Add Hotel Rooms</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper" s>
                    <input
                      type="number"
                      name="roomNo"
                      required
                      value={register.roomNo}
                      onChange={changehandleSubmit}
                      placeholder="Hotel Room No"
                    />
                  </div>
                  <div class="inputWrapper">
                  <select
                          class="form-select"
                          value={register.ac}
                          onChange={changehandleSubmit}
                          name="ac"
                          style={{border:'1px solid grey'}}
                          >
                          <option value="">Select</option>
                          <option value="Ac">Ac</option>
                          <option value="Non-Ac">Non-Ac</option>
                        </select>
                  </div>
                  <div class="inputWrapper">
                    <select
                          class="form-select"
                          value={register.type}
                          onChange={changehandleSubmit}
                          name="type"
                          style={{border:'1px solid grey'}}
                          >
                          <option value="">Select</option>
                          <option value="Single room">Single Room</option>
                          <option value="Double room">Double Room</option>
                          <option value="Suit room">Suit Room</option>
                        </select>
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="price"
                      value={register.price}
                      onChange={changehandleSubmit}
                      required
                      placeholder="Price"
                    />
                  </div>

                  <input
                    type="submit"
                    name="register"
                    id="register"
                    value="Add"
                    style={{height:'60px',width:'213px',marginLeft:'15px',marginTop:'.5px'}}
                  />
                </form>
              </div>
            </div>
          </main>
        </body>
      </div>
    </div>
  );
}

export default AddRoom;
