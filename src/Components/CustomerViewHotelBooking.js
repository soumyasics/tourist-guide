import React, { useEffect, useState } from 'react'
import CustNav from '../CustProf/CustNav'
import axiosInstance from './BaseUrl'

function CustomerViewHotelBooking() {

    const[data,setData]=useState([])
    const id=localStorage.getItem("userlogid")

    useEffect(()=>{
        axiosInstance
        .post(`/viewBookingByCustId/${id}`)
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

    const handleRemove = (id) => {
        axiosInstance.post(`/cancelBookingByid/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                alert('Removed')
                setData(prevArray => prevArray.filter(item => item._id !== id));
                // window.location.reload()
            }else  if(res.data.status==500){
              alert(res.data.msg)
                // alert.warning('Employee Already Exist')
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
      <CustNav/>

      <div style={{ padding: "80px 40px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Hotel Name</th>
              <th scope="col">Room No</th>
              <th scope="col">Checkin</th>
              <th scope="col">Checkout</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.hotel_id.hotelName}({a.hotel_id.contact})</th>
                    <td>{a.roomid.roomNo}</td>
                    <td>{a.checkindate.slice(0,10)}</td>
                    <td>{a.checkoutdate.slice(0,10)}</td>
                    <td><button class='btn btn-danger' onClick={()=>{handleRemove(a._id)}} >Cancel</button></td>
                  </tr>
                );
              })
            ) : (
              <h1>No New Bookings</h1>
            )}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default CustomerViewHotelBooking
