import React, { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import { Link, useNavigate } from "react-router-dom";
import gif2 from "../img/restaurant.gif";
import gif1 from "../img/custlog.jpeg";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const changehandleSubmit = (a) => {
    setLogin({ ...login, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(login);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    // alert('submitted')

    b.preventDefault();
    axiosInstance
      .post("/loginUser", login)
      .then((result) => {
        console.log("data entered", result);
        if (result.status == 200) {
          alert("login Successfully");
          navigate("/CustHome");
          localStorage.setItem("userlogid", result.data.user._id);
        } else {
          alert("Login Failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Login Failed");
      });
  };
  return (
    <div>
      <body class="container mt-5">
        <main class="container row" style={{boxShadow:' 0 10px 1rem #0004'}}  >
          {/* <div class="back"></div> */}
          <div class="brand col-6">
           
              <img
                height={690}
                src={gif1}
                alt="Panda Logo"
                style={{ objectFit: "cover" }}
              />
              <h1>
                <span class="name">
                  <span>ADVENTURE</span>
                  <span> </span>
                </span>
                IS OUT THERE
              </h1>
            </div>
          
          <div class="formWrapper col-6">
            <div class="form">
              <h2>MEMBER LOGIN</h2>
              <form onSubmit={submitt}>
                <div class="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={login.email}
                    onChange={changehandleSubmit}
                    required
                  />
                  {/* <label for="">Email</label> */}
                </div>

                <div class="inputWrapper">
                  <input
                    type="password"
                    name="password"
                    value={login.password}
                    placeholder="Password"
                    onChange={changehandleSubmit}
                    
                    required
                  />
                  {/* <label for="password">Password</label> */}
                </div>

                <input
                  type="submit"
                  id="login"
                  style={{
                    height: "60px",
                    width: "213px",
                    marginLeft: "15px",
                    marginTop: ".5px",
                  }}
                />
              </form>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default Login;
