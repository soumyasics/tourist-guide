import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import HotelNav from "./HotelProf/HotelNav";

function EditFood() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [register,setRegister] = useState({});




  useEffect(() => {

    axiosInstance.post(`/viewRoomById/${id}`)
    .then((res)=>{
      console.log(res);

      setRegister(res.data.data)
    
  })
  }, []);

  const changehandleSubmit = (e)=>{
    setRegister({...register, [e.target.name]:e.target.value})
  }

  // const [register, setRegister] = useState({
  //   roomNo: "",
  //   ac: "",
  //   type: "",
  // });

  // const changehandleSubmit = (a) => {
  //   setRegister({ ...register, [a.target.name]: a.target.value });
  // };

  // useEffect(() => {
  //   axiosInstance.post(`/viewRoomById/${id}`).then((res) => {
  //     console.log(res, "room detail");
  //     setRegister(res.data.data);
  //   });
  // }, []);
  useEffect(()=>{
    console.log(register);
  })

  const submitt = (e) => {
    e.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/editRoomsById/${id}`, register)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          alert("Room Updated");
          navigate("/ViewRoom");
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
        <HotelNav />
        {/* <main class="container1"> */}
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
              
            </div>
            <div class="formWrapper">
              <div class="form">
                <h2>Add Hotel Rooms</h2>
                <form onSubmit={submitt}>
                  <div class="inputWrapper" >
                    <input
                      type="number"
                      name="roomNo"
                      required
                      value={register.roomNo}
                      placeholder="Hotel Room No"
                      onChange={changehandleSubmit}
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
                  <div class="inputWrapper">
                   
                    <select
                          class="form-select"
                          value={register.type}
                          onChange={changehandleSubmit}
                          name="type"
                          style={{border:'1px solid grey'}}
                          >
                          <option value="">Select</option>
                          <option value="Single room">Single Room</option>
                          <option value="Double room">Double Room</option>
                          <option value="Suit room">Suit Room</option>
                        </select>
                  </div>
                  <div class="inputWrapper">
                   
                    <select
                          class="form-select"
                          value={register.ac}
                          onChange={changehandleSubmit}
                          name="ac"
                          style={{border:'1px solid grey'}}
                          >
                          <option value="">Select</option>
                          <option value="Ac">Ac</option>
                          <option value="Non-Ac">Non-Ac</option>
                        </select>
                  </div>
                

                  <input
                    type="submit"
                    name="register"
                    id="register"
                    value="Edit"
                    style={{height:'60px',width:'213px',marginLeft:'15px',marginTop:'.5px'}}
                  />
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
