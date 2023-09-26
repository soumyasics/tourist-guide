import React from "react";
import CustNav from "../CustProf/CustNav";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "./BaseUrl";

function CustomerBookRoom() {
  const { rid } = useParams();
  const { hid } = useParams();
  const { price } = useParams();

  const { room } = useParams();

  const cid = localStorage.getItem("userlogid");

  const roomDetails = JSON.parse(room);
  const navigate = useNavigate();
  let rate=1
  console.log("rromsss",roomDetails);
  console.log("price",price);
  const diffTime = Math.abs(new Date(roomDetails.room.checkoutdate) - new Date(roomDetails.room.checkindate));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  console.log(diffTime + " milliseconds");
  console.log(diffDays + " days");
  rate=price*diffDays
  console.log("rate",rate);
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(values);

    axiosInstance
      .post("/bookRoom", {
        roomid: rid,
        custid: cid,
        hotel_id: hid,
        type: roomDetails.room.type,
        checkindate: roomDetails.room.checkindate,
        checkoutdate: roomDetails.room.checkoutdate,
      })
      .then((res) => {
        console.log(res);

        if (res.data.status == 200) {
          alert("Booking Successful");
          navigate("/cust_view_hotel_booking");
        } else {
          // setEr(res.data.msg);
          alert("Booking Failed");
        }
      })
      .catch((err) => {
        console.log("error", err);
        alert("Booking Failed");
      });
  };

  return (
    <div>
      <CustNav />
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
                <form onSubmit={onSubmit}>
                 
                  

                  
                <label for="exampleFormControlInput1" class="form-label">
                    payable Amount
                  </label>
                  <input
                    type="number"
                    style={{ width: "100%" }}
                   value={rate}
                    disabled
                  />

                  <label for="exampleFormControlInput1" class="form-label">
                    Card Number
                  </label>
                  <input
                    type="number"
                    style={{ width: "100%" }}
                    min="1000000000000000"
                    max="9999999999999999"
                    required
                  />
                  <label for="exampleFormControlInput1" class="form-label">
                    CVV
                  </label>
                  <input
                    type="number"
                    style={{ width: "100%" }}
                    min="100"
                    max="999"
                    required
                  />
                  <label for="exampleFormControlInput1" class="form-label">
                    Expiry
                  </label>
                  <div style={{display:'flex'}} >
                     <select class="form-control" style={{marginRight:'5px'}} name="month" id="month" required>
                    <option  >Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <select class="form-control" name="year" id="year" required>
                    <option>Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                    <option value="2037">2037</option>
                    <option value="2038">2038</option>
                    <option value="2039">2039</option>
                    <option value="2040">2040</option>
                    <option value="2041">2041</option>
                    <option value="2042">2042</option>
                    <option value="2043">2043</option>
                    <option value="2044">2044</option>
                    <option value="2045">2045</option>
                  </select>
                  </div>
                 
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
  );
}

export default CustomerBookRoom;
