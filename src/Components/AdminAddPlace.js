import React, { useEffect, useState } from 'react'
import axiosInstance from './BaseUrl';
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';

function AdminAddPlace() {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })

    const [register, setRegister] = useState({
        district:'',
        city:'',
        loc:'',
        travelmode:'',
        distance:'',
        locType:'',
        image:null,
        lat:0,
        lon:0
        
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
          .post(`/addPlace`, register, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((result) => {
            console.log("data entered", result);
            if (result.status == 200) {
              alert("Add Place Sucessfully...");
              // navigate("/Customer");
              window.location.reload();
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
    <AdminNav />
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
                    required
                    placeholder='City'
                  />
                </div>

                <div class="inputWrapper">
                  <input
                    type="text"
                    name="loc"
                    value={register.loc}
                    onChange={changehandleSubmit}
                    required
                    placeholder='Location'
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="travelmode"
                    value={register.travelmode}
                    onChange={changehandleSubmit}
                    required
                    placeholder='Travel Mode'
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="number"
                    name="distance"
                    value={register.distance}
                    onChange={changehandleSubmit}
                    required
                    placeholder='Distance'
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="file"
                    name="image"
                    onChange={changehandleSubmit}
                    style={{width:'210px'}}
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
                    onChange={changehandleSubmit}
                    style={{height:'60px'}}
                    placeholder='Location Type'
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
                  style={{height:'60px',marginLeft:'15px'}}
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

export default AdminAddPlace