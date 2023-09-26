import React, { useEffect, useState } from 'react'
import axiosInstance from './BaseUrl';
import AdminNav from './AdminNav';
import { useParams } from 'react-router-dom';

function ViewTouristPlace() {
    const {id}=useParams()
    const[place,setplace]=useState([])
    useEffect(()=>{
        axiosInstance
        .post(`/viewTouristPlaceById/${id}`)
        .then((res) => {
          console.log(res, "view toursit place ");
          if (res.data.data != undefined) {
            setplace(res.data.data);
          } else {
            setplace([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },[])
  return (
    <div>
    <AdminNav/>
      
      <div style={{marginTop:"20px"}}>
      <div class="container text-center">
                  <div class="row">
                    {place.length ? (
                      place.map((a) => {
                        return (
                          <div className="col" style={{margin:"10px 0px"}}>
                            <div class="card" style={{ width: '18rem' ,backgroundColor:"white",boxShadow: '1px 2px 2px 2px grey' }}>
                              <div class="card-body">
                                <h4 class="card-title" style={{color:'Green'}}>Room Number: {a.roomNo}</h4>
                                <h3 class="card-text">
                                Price: ₹{a.price}
                                </h3>
                                <p class="card-text">
                                Type: {a.type}
                                </p>
                                
                                
                              
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="col">
                        <div class="card" style={{ width: "18rem;" }}>
                          <div class="card-body">
                            <h5 class="card-title">No Details Available</h5>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
      </div>
</div>
  )
}

export default ViewTouristPlace