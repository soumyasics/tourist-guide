import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import AdminNav from "./AdminNav";

function Adminpack() {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })

  const [appagdata, setappagdata] = useState([]);
  const [dltag, setdltag] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewAgencyRequests`)
      .then((res) => {
        console.log(res, "viewAgencyReq");
        if (res.data.data != undefined) {
          setappagdata(res.data.data);
        } else {
          setappagdata([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleApprovAgency = (id) => {
    axiosInstance
      .post(`/ApproveAgency/${id}`)
      .then((res) => {
        if (res.data.status == 200) {
          alert('Approved')
          window.location.reload()

        }else{
          alert('Failed')
          
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert('Failed')
      });
  };
  const handleRemoveAgency = (id) => {
    axiosInstance
      .post(`/deleteAgencyById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("removed");
          window.location.reload();
          setdltag(res.data.data);
        } else {
          setdltag([]);
          

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // if (localStorage.getItem("adminlog") == 1) {
    return (
      <div className="productdiv1" style={{ minHeight: "400px" }}>
        <AdminNav />
        {/* <button
          className="btn btn-dark"
          onClick={() => {
            localStorage.removeItem("adminlog");
            alert("Logged out");
            window.location.reload(false);
          }}
        >
          Logout
        </button> */}

<div style={{ padding: "80px 80px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Agency Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Reg No</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {appagdata.length ? (
              appagdata.map((a) => {
                return (
                  <tr>
                    <th scope="row">{a.Name}</th>
                    <td>{a.email}</td>
                    <td>{a.regNo}</td>
                    <td>{a.city}</td>
                    <td><button class='btn btn-success' style={{marginRight:'2px'}} onClick={()=>{handleApprovAgency(a._id)}} >Approve </button><button class='btn btn-danger' onClick={()=>{handleRemoveAgency(a._id)}} >Remove </button></td>
                  </tr>
                );
              })
            ) : (
              <h1 style={{padding:'50px'}} >No Request found</h1>
            )}
          </tbody>
        </table>
      </div>
      </div>
    );
  // } else {
  //   return (
  //     <div style={{ minHeight: "400px" }}>
  //       <h1 style={{ textAlign: "center", position: "relative", top: "150px" }}>
  //         Please{" "}
  //         <Link style={{ fontSize: "50px" }} to="/Admin">
  //           log in{" "}
  //         </Link>
  //         to see admin panel{" "}
  //       </h1>
  //     </div>
    // );
  // }
}

export default Adminpack;
