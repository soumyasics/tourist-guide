import React, { useEffect, useState } from 'react'
import CustNav from '../CustProf/CustNav'
import axiosInstance from './BaseUrl';

function CustomerViewTaxiBookings() {

    const[data,setData]=useState([])
    const id=localStorage.getItem("userlogid")

    useEffect(()=>{
        axiosInstance
        .post(`/viewAllTaxiBookingBycustId/${id}`)
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
        axiosInstance.post(`/cancelTaxiBookingByid/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                alert('Removed')
                setData(prevArray => prevArray.filter(item => item._id !== id));
                // window.location.reload()
            }else if(res.data.status==500){
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
              <th scope="col">Driver Name</th>
              <th scope="col">Date</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.taxiid.driverName}({a.taxiid.contact})</th>
                    <td>{a.date.slice(0,10)}</td>
                    <td>{a.from}</td>
                    <td>{a.to}</td>
                    <td>{a.status}</td>
                    <td>{(a.status=='pending'||a.status=='accepted')?<button class='btn btn-danger' onClick={()=>{handleRemove(a._id)}} >Cancel</button>:'Booking is Rejected'}</td>
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

export default CustomerViewTaxiBookings
