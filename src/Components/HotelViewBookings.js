import React, { useEffect, useState } from 'react'
import HotelNav from './HotelProf/HotelNav'
import axiosInstance from './BaseUrl'

function HotelViewBookings() {

    const[data,setData]=useState([])
    const id=localStorage.getItem("hotellogid")

    useEffect(()=>{
        axiosInstance
        .post(`/viewBookingByHotelid/${id}`)
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
      <HotelNav/>
      <div style={{ padding: "80px 40px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ID number</th>
              <th scope="col">Checkin</th>
              <th scope="col">Checkout</th>
              <th scope="col">Room Number</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.custid.name}({a.custid.contact})</th>
                    <td>{a.custid.idnumb}</td>
                    <td>{a.checkindate.slice(0,10)}</td>
                    <td>{a.checkoutdate.slice(0,10)}</td>
                    <td>{a.roomid.roomNo}</td>
                    {/* <td><button class='btn btn-success' style={{marginRight:'4px'}} onClick={()=>{handleAccept(a._id)}} >Approve</button><button class='btn btn-danger' onClick={()=>{handleRemove(a._id)}} >Reject</button></td> */}
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

export default HotelViewBookings
