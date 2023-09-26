import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import axiosInstance from './BaseUrl';
import { useNavigate } from 'react-router-dom';

function AdminViewTaxi() {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })

    const[data,setData]=useState([])

    useEffect(()=>{
        axiosInstance
        .post(`/viewTaxis`)
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

    const handleRemove=(id)=>{
      axiosInstance.post(`/deleteTaxiById/${id}`)
      .then((res)=>{
          console.log(res);
        if(res.data.status==200){
          alert('Removed')
        }
        if(res.data.status==400){
          alert(res.data.msg)

        }
         
      })
      .catch((err)=>{
          console.log(err);
      })
    }

  return (
    <div>
      <AdminNav/>
      <div style={{ padding: "80px 40px" }}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">RegNo</th>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Seats</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.driverName}({a.contact})</th>
                    <td>{a.email}</td>
                    <td>{a.regNo}</td>
                    <td>{a.brand}</td>
                    <td>{a.model}({a.ac})</td>
                    <td>{a.sc}</td>
                    <td><button class='btn btn-danger' onClick={()=>{handleRemove(a._id)}} >Remove</button></td>
                  </tr>
                );
              })
            ) : (
              <h1>No Taxi Found</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminViewTaxi
