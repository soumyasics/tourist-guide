import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import axiosInstance from './BaseUrl';
import gif2 from "../img/restaurant.gif"


function TaxiReg() {

    const [register, setRegister] = useState({
        driverName: "",
        regNo: "",
        email: "",
        password: "",
        brand: "",
        model: "",
        sc: "",
        ac: "",
        contact: "",
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
          .post("/registerTaxi", register)
          .then((result) => {
            console.log("data entered", result);
            if (result.status == 200) {
              alert("Register Sucessfully");
              navigate("/taxi_login");
      
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
      <Navbar/>
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
              <h2>Taxi Signup</h2>
              <form onSubmit={submitt}>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="driverName"
                    placeholder="Driver Name"
                    required
                    value={register.driverName}
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
                    name="regNo"
                    placeholder="Reg No"
                    value={register.regNo}
                    onChange={changehandleSubmit}
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={register.brand}
                    onChange={changehandleSubmit}
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    value={register.model}
                    onChange={changehandleSubmit}
                    required
                  />
                </div>
                <div class="inputWrapper">
                  <input
                    type="number"
                    name="sc"
                    placeholder="Seat Capacity"
                    value={register.sc}
                    onChange={changehandleSubmit}
                    required
                  />
                </div>

                <div class="inputWrapper">
             

                  <select
                    id="dropdown"
                    class=" col-sm-4"
                    name="ac"
                    value={register.ac}
                    onChange={changehandleSubmit}
                    style={{border:'1px solid grey'}}
                    >   
           
                    <option  >Select Type </option>
                    <option value="Ac"> Ac </option>
                    <option value="Non-Ac">Non-Ac</option>
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
                  style={{height:'60px',marginLeft:'15px'}}
                />
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
    </div>
  )
}

export default TaxiReg
