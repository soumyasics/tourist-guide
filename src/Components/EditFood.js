import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestNav from "./RestProf/RestNav";
import axiosInstance from "./BaseUrl";

function EditFood() {
  const [register, setRegister] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axiosInstance.post(`/viewFoodById/${id}`).then((res) => {
      console.log(res);

      setRegister(res.data.data);
    });
  }, []);

  const changehandleSubmit = (e) => {
    if (e.target.name == "image") {
      setRegister({ ...register, image: e.target.files[0] });
    } else {
      setRegister({ ...register, [e.target.name]: e.target.value });
    }
  };

  const submitt = (e) => {
    e.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/editFoodById/${id}`, register, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("Food Updated");
          navigate("/ViewFood");
        } else {
          alert("Updation Failed");
        }
      })
      .catch((err) => {
        console.log(err, " axios error");
      });
  };

  return (
    <div>
      <div>
        <RestNav />
        {/* <main class="container1"> */}
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
            ></div>
            <div class="formWrapper">
              <div class="form">
                <h2>Edit Foods</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper">
                    <input
                      type="text"
                      name="foodname"
                      required
                      value={register.foodname}
                      placeholder="Food Name"
                      onChange={changehandleSubmit}
                    />
                  </div>
                  <div class="inputWrapper">
                    <select
                      id="dropdown"
                      class="form-control col-sm-4"
                      name="vegornon"
                      value={register.vegornon}
                      onChange={changehandleSubmit}
                      style={{ border: "1px solid grey" }}
                    >
                      <option>Select Type </option>
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
                      placeholder="Type"
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
                      value={register.description}
                      onChange={changehandleSubmit}
                      style={{
                        height: "60px",
                        width: "213px",
                        marginLeft: "0px",
                        marginTop: ".5px",
                      }}
                      required
                    >
                      Description
                    </textarea>
                  </div>

                  <div class="inputWrapper">
                    <input
                      type="file"
                      name="image"
                      onChange={changehandleSubmit}
                      style={{width:'210px',height:'60px'}}

                    />
                  </div>
                  {/* <div class="inputWrapper1">
                    <input
                      type="file"
                      name="image"
                      onChange={changehandleSubmit}
                      required
                    />
                   
                  </div> */}

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
                    style={{
                      height: "60px",
                      width: "213px",
                      marginLeft: "15px",
                      marginTop: ".5px",
                    }}
                  >
                    Edit
                  </button>
                </form>
              </div>
            </div>
          </main>
        </body>
        {/* </main> */}
      </div>
    </div>
  );
}

export default EditFood;
