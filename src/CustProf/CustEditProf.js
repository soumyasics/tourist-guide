import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Components/BaseUrl';
import pic5 from '../img/user (1).png';
import CustNav from './CustNav';

function CustEditProf() {
    const [value,setValue] = useState({});
    const navigate=useNavigate();
  
  
    const id=localStorage.getItem("userlogid")
  
  
    useEffect(() => {
  
  
      axiosInstance.post(`/viewUserById/${id}`)
      .then((res)=>{
      setValue(res.data.data)
      
    })
    }, []);
  
    const updatefcn=(e)=>{
      e.preventDefault();
  
      axiosInstance.post(`/editUserById/${id}`,value)
      .then((response)=>{
        console.log(response);
        if (response.data.status==200) {
          alert('Profile Updated')
          navigate('/CustViewProf')
        }else{
          alert('Updation Failed')
        }
  
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  
    const changefn = (e)=>{
  setValue({...value, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        console.log(value);

    })
  return (
    <div>
          <CustNav/> 
        <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src={pic5}
              />
              <span class="font-weight-bold">{value.name}</span>
              <span class="text-black-50">{value.email}</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Customer Profile Edit</h4>
              </div>
              <form onSubmit={updatefcn}>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Name</label>
                  <input
                    type="text"
                    class="form-control"
                 
                    value={value.name}
                    name='name'
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Contact</label>
                  <input
                    type="number"
                    name="contact"
                    class="form-control"
                    value={value.contact}
                  
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">City</label>
                  <input
                    type="text"
                    name="city"
                    class="form-control"
                    value={value.city}
                  
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Country</label>
                  <input
                    type="text"
                    name="country"
                    class="form-control"
                    value={value.country}
                  
                    onChange={changefn}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Email</label>
                  <input
                    type="email"
                    class="form-control"  
                    value={value.email}
                    name="email"
                    onChange={changefn}
                  />
                </div>
                {/* <div class="col-md-12">
                  <label class="labels">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    value={value.password}
                  />
                </div> */}
                <div class="col-md-12">
                  <label class="labels">Identity Card</label>
                  <input
                    type="text"
                    class="form-control"   
                    value={value.idtype}
                    name="idtype"
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Identity Number</label>
                  <input
                    type="number"
                    pattern='[0-9]*'
                    class="form-control"
                    name="idnumb"
                    value={value.idnumb}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Gender</label>
                  <select
                    id="dropdown"
                    class="col-sm-4 form-control"
                    name="gender"
                    value={value.gender}
                    onChange={changefn}
                    style={{border:'1px solid #dee2e6'}}
                    >   
           
                    <option  >Select Gender</option>
                    <option value="Male"> Male </option>
                    <option value="Female">Female</option>
                  </select>
                  {/* <input
                    type="text"
                    class="form-control"
                   
                    value={value.gender}
                    onChange={changefn}
                    name="gender"
                  /> */}
                </div>
              
              <button type='submit' class='btn btn-primary h-23 w-100 py-2'>Update</button>
                
              </div>
             
              </form>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CustEditProf