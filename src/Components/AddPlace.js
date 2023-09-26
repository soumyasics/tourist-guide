import React, { useEffect, useState } from 'react'
import CustNav from '../CustProf/CustNav';
import axiosInstance from './BaseUrl';

function AddPlace() {
    const custid = localStorage.getItem('userlogid');
    console.log(custid);
    const [register, setRegister] = useState({
        district:'',
        city:'',
        loc:'',
        travelmode:'',
        distance:'',
        locType:'',
        lat:0,
        lon:0,
        image:null,
        
    });
    const changehandleSubmit = (a) => {
        if (a.target.name == "image") {
          setRegister({ ...register, image: a.target.files[0] });
        } else {
          setRegister({ ...register, [a.target.name]: a.target.value });
        }
      };
      useEffect(() => {
        console.log(register);
      });
      const submitt = (b) => {
        console.log("submitted",register);
    
        b.preventDefault();
        axiosInstance
          .post(`/addPlace/${custid}`, register, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((result) => {
            console.log("data entered", result);
            if (result.data.status == 200) {
              alert("Add Place Sucessfully...");
              window.location.reload();
              // navigate("/Customer");
            } else {
              alert("Failed to Add");
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      };
  return (
    <div>
    <CustNav />
    <div>
      <body id="signup">
        <main class="container1">
          <div class="back"></div>
          <div
            class="brand"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80")',
              backgroundSize: "cover",
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
              <h2>Add Place</h2>
              <form onSubmit={submitt}>
                <div class="inputWrapper" s>
                  <input
                    type="text"
                    name="district"
                    required
                    value={register.district}
                    onChange={changehandleSubmit}
                    placeholder='District'
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="city"
                    value={register.city}
                    onChange={changehandleSubmit}
                    placeholder='City'
                    required
                  />
                </div>

                <div class="inputWrapper">
                  <input
                    type="text"
                    name="loc"
                    value={register.loc}
                    onChange={changehandleSubmit}
                    placeholder='Location'
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="travelmode"
                    value={register.travelmode}
                    onChange={changehandleSubmit}
                    placeholder='Travel Mode'
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="number"
                    name="distance"
                    value={register.distance}
                    onChange={changehandleSubmit}
                    placeholder='Distance'
                    required
                  />
                </div>
                <div class="inputWrapper1">
                  <input
                    type="file"
                    name="image"
                    onChange={changehandleSubmit}
                    style={{height:'60px',width:'213px',marginLeft:'0px',marginTop:'.5px'}}
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="number"
                    name="lat"
                    // value={register.locType}
                    placeholder='Latitude'
                    onChange={changehandleSubmit}
                    step="0.000000001"
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="number"
                    name="lon"
                    // value={register.locType}
                    placeholder='Longitude'
                    onChange={changehandleSubmit}
                    step="0.000000001"

                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="locType"
                    // value={register.locType}
                    placeholder='Location Type'
                    onChange={changehandleSubmit}
                    style={{height:'60px',width:'213px',marginLeft:'0px',marginTop:'.5px'}}
                    required
                  />
                </div>
               
                {/* <input
                  type="submit"
                  name="register"
                  
                  value="Add"
                  style={{ marginTop: "2rem" }}
                /> */}
                <button
                  type="submit"
                  class="btn btn-primary mb-5"
                  id="register"
                  style={{height:'60px',width:'213px',marginLeft:'15px',marginTop:'.5px'}}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </main>
      </body>
    </div>
  </div>
  )
}

export default AddPlace