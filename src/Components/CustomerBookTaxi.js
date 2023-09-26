import React, { useState } from 'react'
import CustNav from '../CustProf/CustNav'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from './BaseUrl';

function CustomerBookTaxi() {

    const { id } = useParams();
    const cid=localStorage.getItem("userlogid")
    const navigate=useNavigate();

  const [register, setRegister] = useState({
    custid: cid,
    date:'',
    time: "",
    from: "",
    to: "",
  });

  const changehandleSubmit = (a) => {
    setRegister({ ...register, [a.target.name]: a.target.value });
  };

  const submitt = (b) => {
    console.log("submitted");
    b.preventDefault();
    console.log(register);
    axiosInstance
      .post(`/bookTaxi/${id}`, register)
      .then((result) => {
        console.log("data entered", result);
        if (result.data.status == 200) {
          alert("Book Successfully...");
          navigate('/cust_view_booking')
        } else {
          alert("Failed to Book");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <CustNav/>
      <div>
        <body id="signup">
          <main class="container1">
            <div class="back"></div>
            <div
              class="brand"
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
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
                <h2>Booking</h2>
                <form onSubmit={submitt}>
                  <label for="exampleFormControlInput1" class="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    onChange={changehandleSubmit}
                    required
                    class="form-control"
                    min={new Date().toISOString().split('T')[0]}
                    id="exampleFormControlInput1"
                  />

                  <label for="exampleFormControlInput1" class="form-label">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    style={{ width: "100%" }}
                    //   value={register.doj}
                    onChange={changehandleSubmit}
                    required
                  />

                  <label for="exampleFormControlInput1" class="form-label">
                    From
                  </label>
                  <input
                    type="text"
                    style={{ width: "100%" }}
                    name='from'
                    onChange={changehandleSubmit}

                    required
                  />
                  <label for="exampleFormControlInput1" class="form-label">
                    To
                  </label>
                  <input
                    type="text"
                    onChange={changehandleSubmit}

                    style={{ width: "100%" }}
                    name='to'
                    required
                  />
                  
                 
                  <button type="submit" class="btn btn-danger">
                    Booking
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

export default CustomerBookTaxi
