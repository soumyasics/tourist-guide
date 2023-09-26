import { useFormik } from "formik";
import React from "react";
import axiosInstance from "./BaseUrl";

import CustNav from "../CustProf/CustNav";
import { toast } from "react-toastify";

function Payment() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        cardHolderName: "",
        cardNo: "",
        cvv: "",
        month: "",
        year: "",
        aadhar: "",
      },
      //   validationSchema: BookingSchema,
      //   onSubmit,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    if (
      values.year == "2023" &&
      (values.month == "June" ||
        values.month == "May" ||
        values.month == "April" ||
        values.month == "March" ||
        values.month == "February" ||
        values.month == "January")
    ) {
      toast.error("Card Expired");
    } else {
      axiosInstance
        .post("/addBooking")
        .then((res) => {
          console.log(res);

          if (res.data.status == 200) {
            alert("Booking Successful");
            // navigate('/customer_login')
          } else {
            // setEr(res.data.msg);
           alert("Booking Failed");
          }
        })
        .catch((err) => {
          console.log("error", err);
        //   toast.error("Registration Failed");
        });
    }
  };
  return (
    <div>
      <CustNav />

      <form
        onSubmit={onSubmit}
        style={{
          border: "1px solid black",
          marginLeft: "15rem",
          width: "45rem",
          height: "30rem",
          marginTop: "2rem",
          paddingLeft:'4rem',
          backgroundColor:'wheat',
          border:'none',paddingTop:'1.5rem',
          boxShadow:'1px 2px 2px 1px grey'
        
        }}
      >
        <div class="row g-3">
          <div class="col-md-9">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                value={values.cardHolderName}
                onChange={handleChange}
                onBlur={handleBlur}
                id="cardHolderName"
                placeholder="Your Name"
                style={{width:'20rem'}}
              />

              <label for="name">Card Holder Name</label>
            </div>
          </div>
          {errors.cardHolderName && touched.cardHolderName && (
            <span className="err">{errors.cardHolderName}</span>
          )}

          <div class="col-md-6">
            <div class="form-floating">
              <input
                type="number"
                class="form-control"
                value={values.cardNo}
                onChange={handleChange}
                onBlur={handleBlur}
                id="cardNo"
                placeholder="Your Name"
              />

              <label for="cardNo">Card Number</label>
            </div>
            {errors.cardNo && touched.cardNo && (
              <span className="err">{errors.cardNo}</span>
            )}
          </div>
          <div class="col-md-6">
            <div class="form-floating">
              <input
                type="number"
                class="form-control"
                value={values.cvv}
                onChange={handleChange}
                onBlur={handleBlur}
                id="cvv"
                placeholder="Your Cvv"
              />

              <label for="name">CVV</label>
            </div>
            {errors.cvv && touched.cvv && (
              <span className="err">{errors.cvv}</span>
            )}
          </div>

          <div class="col-md-6">
           
              <div class="form-group">
                <div class="row">
                  
                  <div class="col-8">
                    <label for="email">Month</label>
                    <select
                      class="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="month"
                      id="month"
                    >
                      <option>Month</option>
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
                  </div>
                  <div class="col-8">
                    <label for="email">Year</label>
                    <select
                      class="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="year"
                      id="year"
                    >
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
                </div>
              </div>
            
          </div>
          <div class="col-md-12">
            <div class="form-floating">
              <input
                type="number"
                class="form-control"
                value={values.aadhar}
                onChange={handleChange}
                onBlur={handleBlur}
                id="aadhar"
                placeholder="Your Name"
              />

              <label for="email">Aadhar Number</label>
            </div>
            {errors.aadhar && touched.aadhar && (
              <span className="err">{errors.aadhar}</span>
            )}
          </div>
          {/* <div class="col-md-12">
                      <div class="form-floating">
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="Password"
                        />
                        <label for="email">Your Password</label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="city"
                          placeholder="Your City"
                        />
                        <label for="email">Your City</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="country"
                          placeholder="Your Country"
                        />
                        <label for="email">Your Country</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="number"
                          class="form-control"
                          id="pincode"
                          placeholder="Your Pincode"
                        />
                        <label for="email">Your Pincode</label>
                      </div>
                    </div> */}

          <div class="col-12">
            <button
              class="btn btn-primary w-100 py-3"
              style={{ backgroundColor: "#FEA116", border: "none" }}
              type="submit"
            >
              Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
