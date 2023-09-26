import React, { useEffect, useState } from 'react'
import GuideProfNav from './GuideProf/GuideProfNav'
import GuideNav from './Guide/GuideNav'
import axiosInstance from './BaseUrl'

function GuideViewBookings() {

    const[data,setData]=useState([{custId:''},{packageId:''}])
    const id=localStorage.getItem("guidelogid")
    console.log(id);

    useEffect(()=>{
        axiosInstance
        .post(`/viewBookingByAgencyId/${id}`)
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
        <GuideProfNav/>
      <div style={{ padding: "80px 40px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ID number</th>
              <th scope="col">Package</th>
              <th scope="col">Destination</th>
              <th scope="col">Date of Journey</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.custId?a.custId.name:''}({a.custId?a.custId.contact:''})</th>
                    <td>{a.custId?a.custId.idnumb:''}</td>
                    <td>{a.packageId?a.packageId.title:''}</td>
                    <td>{a.packageId?a.packageId.destination:''}</td>
                    <td>{a.doj?a.doj.slice(0,10):''}</td>
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

export default GuideViewBookings
