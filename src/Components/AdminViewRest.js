import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import axiosInstance from './BaseUrl';
import { useNavigate } from 'react-router-dom';

function AdminViewRest() {
  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })
    const [data, sedata] = useState([]);

  useEffect(() => {
    axiosInstance.post(`/viewRestaurants`).then((res) => {
      console.log(res);
      if(res.data.data){
        sedata(res.data.data);

      }else{
        sedata([]);

      }
    });
  }, []);

  const handleRemove=(id)=>{
    axiosInstance.post(`/deleteRestaurantById/${id}`)
    .then((res)=>{
        if(res.data.status==200){
            alert('Removed')
            window.location.reload()
        }else{
          alert('Failed')
        }
    }
    
    )
    .catch(()=>{
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
              <th scope="col">Restaurant Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Reg No</th>
              <th scope="col">City</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((a) => {
                return (
                  <tr>
                    <td scope="row">{a.name}</td>
                    <td>{a.email}</td>
                    <td>{a.type}</td>
                    <td>{a.city}</td>
                    <td><button class='btn btn-danger' onClick={()=>{handleRemove(a._id)}} >Delete</button></td>
                  </tr>
                );
              })
            ) : (
              <h1>No Restaurants</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminViewRest
