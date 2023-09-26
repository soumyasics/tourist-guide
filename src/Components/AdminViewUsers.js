import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import axiosInstance from './BaseUrl';
import { useNavigate } from 'react-router-dom';

function AdminViewUsers() {
  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })
    const [data, sedata] = useState([]);

    useEffect(() => {
      axiosInstance.post(`/viewUsers`).then((res) => {
        console.log(res);
        if (res.data.data != undefined) {
          sedata(res.data.data);
        } else {
          sedata([]);
        }
      });
    }, []);
  
    const handleHotelApp=(id)=>{
      axiosInstance.post(`/delUserById/${id}`)
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
      <AdminNav/>
      <div style={{ padding: "80px 40px" }}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">ID</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.name}({a.contact})</th>
                    <td>{a.email}</td>
                    <td>{a.idtype}({a.idnumb})</td>
                    <td>{a.city}</td>
                    <td>{a.country}</td>
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
  )
}

export default AdminViewUsers
