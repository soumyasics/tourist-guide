import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axiosInstance from "./BaseUrl";
import { useNavigate } from "react-router-dom";

function AdminViewHotels() {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })
  const [data, sedata] = useState([]);

  useEffect(() => {
    axiosInstance.post(`/viewAprvdHotels`).then((res) => {
      if (res.data.data != undefined) {
        sedata(res.data.data);
      } else {
        sedata([]);
      }
    });
  }, []);

  const handleHotelApp=(id)=>{
    axiosInstance.post(`/deleteHotelById/${id}`)
    .then((res)=>{
        console.log(res);
      if(res.data.status==200){
        alert('Removed')
        window.location.reload()
      }
      if(res.data.status==400){
        alert(res.data.msg)
      }
       
    })
    .catch((err)=>{
        console.log(err);
        alert('Failed')

    })
  }

  return (
    <div>
      <AdminNav />
      <div style={{ padding: "80px 40px" }}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Hotel Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Reg No</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.hotelName}</th>
                    <td>{a.email}</td>
                    <td>{a.regNo}</td>
                    <td>{a.city}</td>
                    <td><button class='btn btn-danger' onClick={()=>{handleHotelApp(a._id)}} >Remove </button></td>
                  </tr>
                );
              })
            ) : (
              <h1>No Hotels</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminViewHotels;
