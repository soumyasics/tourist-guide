import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import { Link, Navigate, useNavigate } from "react-router-dom";
import gif2 from "../img/restaurant.gif"

function RestReg() {
  const [register, setRegister] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    city: "",
    country: "",
    type: "",
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
    alert("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post("/registerRestaurant", register,{headers:{"Content-Type":"multipart/form-data",},})
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Register Sucessfully");
          navigate("/RestLogin");
  
        } else {
          alert("Register Failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Register Failed");

      });
  };
  return (
    <div>
      <body id="signup">
        <main class="container1">
          <div class="back"></div>
          <div class="brand" >
          
              <h1>
                <span class="name">
                  <span>ADVENTURE</span>
                  <span> </span>
                </span>
                IS OUT THERE
              </h1>
            <div class="">
             
               <img
                height={480}
                src={gif2}
                alt="Panda Logo"
              />
              
            </div>
            {/* <span class="copyright">Photo by
        <a href="https://unsplash.com/@filipz" target="_blank" title="Photographer">Filip Zrnzević</a>
        on
        <a href="https://unsplash.com/photos/QsWG0kjPQRY" target="_blank" title="Background Photo">Unsplash</a></span> */}
          </div>
          <div class="formWrapper">
            <div class="form">
              <h2>Restaurant member card</h2>
              <form onSubmit={submitt}>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={register.name}
                    onChange={changehandleSubmit}
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    value={register.email}
                    onChange={changehandleSubmit}
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={register.city}
                    onChange={changehandleSubmit}
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={register.country}
                    onChange={changehandleSubmit}
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="number"
                    name="contact"
                    placeholder="Contact"
                    value={register.contact}
                    onChange={changehandleSubmit}
                    min='0000000000'
                    max='9999999999'
                    style={{width:'210px'}}
                    required
                  />
                </div>

                <div class="inputWrapper">
             

                  <select
                    id="dropdown"
                    class="col-sm-4"
                    name="type"
                    value={register.type}
                    onChange={changehandleSubmit}
                    style={{border:'1px solid grey'}}
                    >   
           
                    <option  >Select Type </option>
                    <option value="Veg"> Veg </option>
                    <option value="non-veg">Non-Veg</option>
                    <option value="Veg & Non-Veg">Veg & Non-Veg</option>
                  </select>
                </div>

                <div class="inputWrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={register.password}
                    onChange={changehandleSubmit}
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
                {/* <div class="inputWrapper">
            <input type="password" name="c_password"  value={register.cpassword}
                  onChange={changehandleSubmit} required />
            <label for="c_password">Confirm Password</label>
          </div> */}
                <input
                  type="submit"
                  name="register"
                  id="register"
                  value="REGISTER"
                  style={{height:'60px',marginLeft:'15px'}}                />
              </form>

              {/* <span id="login1" style={{ color: "black" }}>
                Already a member?{" "}
                <Link
                  to="/RestLogin"
                  title="Login"
                  style={{ color: "darkblue", fontSize: "2rem" }}
                >
                  Log in!
                </Link>
              </span> */}
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default RestReg;
