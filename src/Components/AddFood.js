import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import RestNav from "./RestProf/RestNav";

function AddFood() {
  const id = localStorage.getItem("restlogid");
  const [register, setRegister] = useState({
    foodname: "",
    vegornon: "",
    price: "",
    type: "",
    image: null,
    description: "",
    
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
    console.log("submitted",register);

    b.preventDefault();
    axiosInstance
      .post(`/addFood/${id}`, register, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log("data entered", result);
        if (result.data.status == 200) {
          alert("Add Food Sucessfully...");
          window.location.reload()
          // navigate("/Customer");
        } else {
          alert("Failed to Add");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Failed to Add");
      });
  };
  return (
    <div>
      <RestNav />
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
                <h2>Add Foods</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper" s>
                    <input
                      type="text"
                      name="foodname"
                      required
                      value={register.foodname}
                      onChange={changehandleSubmit}
                      placeholder="Food Name"
                    />
                  </div>
                  <div class="inputWrapper">
                  <select
                    id="dropdown"
                    class="form-control col-sm-4"
                    name="vegornon"
                    value={register.vegornon}
                    onChange={changehandleSubmit}
                    style={{border:'1px solid grey'}}
                    >   
           
                    <option  >Select Type </option>
                    <option value="Veg"> Veg </option>
                    <option value="non-veg">Non-Veg</option>
                  </select>
                   
                    
                  </div>

                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="type"
                      value={register.type}
                      onChange={changehandleSubmit}
                      placeholder="Type-Curry/Fry..."
                      required
                    />
                  </div>
                  <div class="inputWrapper">
                    <input
                      type="number"
                      name="price"
                      value={register.price}
                      onChange={changehandleSubmit}
                      placeholder="Price"
                      required
                    />
                  </div>
                  <div class="inputWrapper2">
                    <textarea
                      type="text"
                      name="description"
                      placeholder="Description"
                      value={register.description}
                      onChange={changehandleSubmit}
                      style={{height:'60px',width:'213px',marginLeft:'0px',marginTop:'.5px'}}
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

                  {/* <input
                    type="submit"
                    name="register"
                    
                    value="Add"
                    style={{ marginTop: "2rem" }}
                  /> */}
                  <button
                    type="submit"
                    class="btn btn-primary mb-5"
                    style={{height:'60px',width:'213px',marginLeft:'15px',marginTop:'.5px'}}
                                        id="register"
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
  );
}

export default AddFood;
