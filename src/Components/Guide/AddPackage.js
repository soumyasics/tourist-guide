import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../BaseUrl";
import GuideNav from "./GuideNav";
import GuideProfNav from "../GuideProf/GuideProfNav";



function AddPackage() {
    const id = localStorage.getItem("guidelogid");
  
  const [register, setRegister] = useState({
    title:'',
    destination:'',
    cost:'',
    days:'',
    nights:'',
    travelmode:'',
    accomodation:'',
    food:'',
    aid: id,
    image:null
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
  const navigate = useNavigate();
  const submitt = (b) => {
    b.preventDefault();
    console.log("submitted",register);
    axiosInstance
      .post("/addPackage", register,{headers:{"Content-Type":"multipart/form-data",},})
      .then((result) => {
        console.log("data entered", result);
        if(result.status==200){
          alert("Add Package Successfully")
          window.location.reload();
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
        <GuideProfNav/>
     
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
                <h2>Add Package</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper" s>
                    <input
                      type="text"
                      name="title"
                      required
                      value={register.title}
                      placeholder="Title"
                      onChange={changehandleSubmit}
                    />
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="destination"
                      value={register.destination}
                      onChange={changehandleSubmit}
                      placeholder="Destination"
                      required
                    />
                  </div>
                
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="cost"
                      value={register.cost}
                      onChange={changehandleSubmit}
                      placeholder="Cost"
                      required
                    />
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="days"
                      value={register.days}
                      onChange={changehandleSubmit}
                      placeholder="Days"
                      required
                    />
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="nights"
                      value={register.nights}
                      onChange={changehandleSubmit}
                      placeholder="Nights"
                      required
                    />
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="travelmode"
                      value={register.travelmode}
                      onChange={changehandleSubmit}
                      placeholder="Travel Mode"
                      required
                    />
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="accomodation"
                      value={register.accomodation}
                      onChange={changehandleSubmit}
                      placeholder="Accomodation"
                      required
                    />
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="food"
                      value={register.food}
                      onChange={changehandleSubmit}
                      placeholder="Food"
                      required
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
                 
                <br/>
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

export default AddPackage;
