import React from "react";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });
  const changehandleSubmit = (a) => {
    setLogin({ ...login, [a.target.name]: a.target.value });
  };
  useEffect(() => {
    console.log(login);
  });

  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    if (login.name == "admin" && login.password == "admin12345") {
      localStorage.setItem("adminlog", 1);
      alert("Login successfully");
      navigate("/admin_home");
    } else {
      alert("login Failed");
    }
  };
  return (
    <div>
      <div>
        <body id="signup">
          <main class="container1">
            <div class="back"></div>
            <div class="brand" style={{ backgroundColor: "#93e18f" }}>
              <div class="logo" style={{ marginTop: "7rem" }}>
                <img
                  height="64"
                  src="https://i.imgur.com/E3uTxXY.png"
                  alt="Panda Logo"
                />
                <h1>
                  <span class="name">
                    <h1>HI WELCOME TO...</h1>
                  </span>
                  ADMIN PANEL
                </h1>
              </div>
              {/* <span class="copyright">Photo by
        <a href="https://unsplash.com/@filipz" target="_blank" title="Photographer">Filip Zrnzević</a>
        on
        <a href="https://unsplash.com/photos/QsWG0kjPQRY" target="_blank" title="Background Photo">Unsplash</a></span> */}
            </div>

            <div class="formWrapper">
              <div class="form">
                <h2>ADMIN LOGIN</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="name"
                      value={login.name}
                      onChange={changehandleSubmit}
                      required
                      placeholder="UserName"
                    />
                  </div>

                  <div class="inputWrapper">
                    <input
                      type="password"
                      name="password"
                      value={login.password}
                      onChange={changehandleSubmit}
                      required
                      placeholder="Password"
                    />
                  </div>
                  {/* <div class="inputWrapper">
            <input type="password" name="c_password"  value={register.cpassword}
                  onChange={changehandleSubmit} required />
            <label for="c_password">Confirm Password</label>
          </div> */}
                  <input type="submit" id="login" />
                </form>

                {/* <span style={{ color :"black" }}>
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
    </div>
  );
}

export default Admin;
