import React, { useEffect, useState } from 'react'
import CustNav from '../CustProf/CustNav'
import axiosInstance from './BaseUrl'

function CustomerViewPackageBookings() {

    const[data,setData]=useState([{packageId:''}])
    const [dltag, setdltag] = useState([]);

    const id=localStorage.getItem("userlogid")

    useEffect(()=>{
        axiosInstance
        .post(`/viewBookingByCId/${id}`)
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
      axiosInstance
        .post(`/cancelPackageBookingByid/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.status == 200) {
            alert("removed");
            window.location.reload();
            setdltag(res.data.data);
          } else if(res.data.status==500){
            alert(res.data.msg);
            setdltag([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  

  return (
    <div>
      <CustNav/>
      <div style={{ padding: "80px 80px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Package</th>
              <th scope="col">Travel Mode</th>
              <th scope="col">Total Days</th>
              <th scope="col">Date</th>
              <th scope="col">Cost</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.packageId.title}</th>
                    <td>{a.packageId.travelmode}</td>
                    <td>{a.packageId.days}</td>
                    <td>{a.doj?a.doj.slice(0,10):''}</td>
                    <td>{a.packageId.cost}</td>
                    <td><button class='btn btn-danger' onClick={()=>{handleRemove(a._id)}} >Cancel</button></td>
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

export default CustomerViewPackageBookings
