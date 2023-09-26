import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axiosInstance from "./BaseUrl";
import { useNavigate } from "react-router-dom";

function AdminViewAgencies() {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })

  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewApprovedAgencies`)
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
  }, []);

  const handleRemove = (id) => {
    axiosInstance
      .post(`/deleteAgencyById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Removed");
          window.location.reload()
        }
        if (res.data.status == 400) {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Failed')

      });
  };

  return (
    <div>
      <AdminNav />
      <div style={{ padding: "80px 40px" }}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">RegNo</th>
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
                    <th scope="row">
                      {a.Name}({a.contact})
                    </th>
                    <td>{a.email}</td>
                    <td>{a.regNo}</td>
                    <td>{a.city}</td>
                    <td>{a.country}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        onClick={() => {
                          handleRemove(a._id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1>No Agencies</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminViewAgencies;
