import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import gif from "../img/custlog.jpeg";

function Register() {
  const [register, setRegister] = useState({
    name: "",
    contact: "",
    email: "",
    idtype: "",
    idnumb: "",
    password: "",
    city: "",
    country: "",
    gender: "",
  });
  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(register);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post("/registerUser", register)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("Register Sucessfully");
          navigate("/Login");
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
      <body class='container mt-5'>
        <main class="container row" style={{boxShadow:' 0 10px 1rem #0004'}}>
          {/* <div class="back"></div> */}
          <div class="brand col-6">
            <h1>
              <span class="name">
                <span>ADVENTURE</span>
                <span> </span>
              </span>
              IS OUT THERE
            </h1>
            
              <img src={gif} height={690} style={{ objectFit: "cover" }} alt="Panda Logo" />
            
          </div>
          <div class="formWrapper col-6" style={{ backgroundColor: "white" }}>
            <div class="form">
              <h2>New member card</h2>
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
                  {/* <label>Name</label> */}
                </div>
                <div class="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={register.email}
                    onChange={changehandleSubmit}
                    required
                  />
                  {/* <label>Email</label> */}
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
                    min="0000000000"
                    max="9999999999"
                    style={{ width: "210px" }}
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="idtype"
                    placeholder="ID Type"
                    value={register.idtype}
                    onChange={changehandleSubmit}
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <select
                    id="dropdown"
                    class="col-sm-4"
                    name="gender"
                    value={register.gender}
                    onChange={changehandleSubmit}
                    style={{ border: "1px solid grey" }}
                  >
                    <option>Select Gender</option>
                    <option value="Male"> Male </option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div class="inputWrapper">
                  <input
                    type="text"
                    name="idnumb"
                    placeholder="ID Number"
                    value={register.idnumb}
                    onChange={changehandleSubmit}
                    required
                  />
                </div>

                <div class="inputWrapper">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={register.password}
                    onChange={changehandleSubmit}
                    required
                  />
                  {/* <label for="password">Password</label> */}
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
                  class="btn btn-dark"
                  style={{ height: "60px" }}
                />
              </form>

              {/* <span id="login1" style={{ color: "black" }}>
                Already a member?{" "}
                <Link
                  to="/Login"
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

export default Register;
