import React, { useEffect, useState } from 'react'
import CustNav from './CustNav';
import axiosInstance from '../Components/BaseUrl';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../img/user-verification-symbol-for-interface.png'

function CustViewProf() {
    const [cust, setcust] = useState({});

    const navigate=useNavigate();
    useEffect(() => {
      if(localStorage.getItem('userlogid')==null){
        navigate('/')
      }
    });
    useEffect(()=>{
      // const storedUser = localStorage.getItem("users");
      const id=localStorage.getItem("userlogid")
      console.log(id)
  ;
  
  
  
    axiosInstance.post(`/viewUserById/${id}`)
    .then((res)=>{
      console.log(res);
      setcust(res.data.data)
      
    })
  
    },[])
  return (
    <div>
         <CustNav/> 
     <section class="vh-100" style={{backgroundColor:"#f4f5f7;"}}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-3" style={{borderRadius: ".5rem;"}}>
                <div class="row g-0">
                  
                 
                  <div class="col-md-12">
                    <div class="card-body p-4">
                      <h2>{cust.name}</h2>
                      
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email:</h6>
                          <p class="text-muted">{cust.email}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Contact:</h6>
                          <p class="text-muted">{cust.contact}</p>
                        </div>
                      </div>
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Identity Type:</h6>
                          <p class="text-muted">{cust.idtype}</p>
                        </div>
                       
                        <div class="col-6 mb-3">
                          <h6>Identity Number:</h6>
                          <p class="text-muted">{cust.idnumb}</p>
                        </div>
                                                <hr class="mt-0 mb-4" />
                        <div class="col-6 mb-3">
                          <h6>City:</h6>
                          <p class="text-muted">{cust.city}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Country:</h6>
                          <p class="text-muted">{cust.country}</p>
                        </div>
                       
                        <hr class="mt-0 mb-4" />
                        <div class="col-6 mb-3">
                          <h6>Gender:</h6>
                          <p class="text-muted">{cust.gender}</p>
                        </div>
                       
                        <hr class="mt-0 mb-4" />


                      </div>
                     
                    <Link to="/CustEditProf"><button type='submit' class='btn btn-success h-23 w-50 py-2 mr2'>Edit</button></Link>
                    <Link to="/"><button type='button' class='btn btn-danger h-23 w-50 py-2' onClick={()=>{localStorage.clear();window.location.reload(false)}}>Logout</button></Link>
                
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default CustViewProf