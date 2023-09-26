import React, { useEffect, useState } from 'react'
import TaxiNav from './TaxiNav'
import axiosInstance from './BaseUrl'

function TaxiViewBookings() {

    const[data,setData]=useState([])
    const id=localStorage.getItem("taxiid")

    useEffect(()=>{
        axiosInstance
        .post(`/viewTaxiBookingByTaxiId/${id}`)
        .then((res) => {
          console.log(res, "view hotel");
          if (res.data.data != undefined) {
            setData(res.data.data);
          } else {
            setData([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },[])

  return (
    <div>
      <TaxiNav/>
      <div style={{ padding: "80px 40px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              {/* <th scope="col">Status</th> */}
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.custid.name}({a.custid.contact})</th>
                    <td>{a.date.slice(0,10)}</td>
                    <td>{a.from}</td>
                    <td>{a.to}</td>
                    {/* <td>{a.status}</td> */}
                  </tr>
                );
              })
            ) : (
              <h1>No Bookings</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaxiViewBookings
