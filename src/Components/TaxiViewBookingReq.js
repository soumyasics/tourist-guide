import React, { useEffect, useState } from 'react'
import TaxiNav from './TaxiNav'
import axiosInstance from './BaseUrl'

function TaxiViewBookingReq() {
    const[data,setData]=useState([])
    const id=localStorage.getItem("taxiid")

    useEffect(()=>{
        axiosInstance
        .post(`/viewTaxiBookingReqsByTaxiId/${id}`)
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
        axiosInstance.post(`/rejectTaxiBooking/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                alert('Removed')
                setData(prevArray => prevArray.filter(item => item._id !== id));
                // window.location.reload()
            }else{
                // alert.warning('Employee Already Exist')
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    const handleAccept = (id) => {
        axiosInstance.post(`/acceptTaxiBooking/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                alert('Accepted')
                setData(prevArray => prevArray.filter(item => item._id !== id));
                // window.location.reload()
            }else{
                // alert.warning('Employee Already Exist')
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <div>
      <TaxiNav/>
      <div style={{ padding: "80px 40px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
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
                    <th scope="row">{a.custid.name}({a.custid.contact})</th>
                    <td>{a.date.slice(0,10)}</td>
                    <td>{a.from}</td>
                    <td>{a.to}</td>
                    <td>{a.status}</td>
                    <td><button class='btn btn-success' style={{marginRight:'4px'}} onClick={()=>{handleAccept(a._id)}} >Approve</button><button class='btn btn-danger' onClick={()=>{handleRemove(a._id)}} >Reject</button></td>
                  </tr>
                );
              })
            ) : (
              <h1>No New Requests</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaxiViewBookingReq
