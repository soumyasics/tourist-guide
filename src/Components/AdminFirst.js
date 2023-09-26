import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axiosInstance from "./BaseUrl";
import { Link, useNavigate } from "react-router-dom";

function AdminFirst() {

  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  })

    const [data, sedata] = useState([]);
    const [rest, setrest] = useState([]);
    const [agency, setagency] = useState([]);
    const [taxi, settaxi] = useState([]);
    const [place, setplace] = useState([]);
    const [users, setusers] = useState([]);

    useEffect(() => {
      axiosInstance.post(`/viewAprvdHotels`).then((res) => {
        if (res.data.data != undefined) {
          sedata(res.data.data);
        } else {
          sedata([]);
        }
      });

      axiosInstance.post(`/viewRestaurants`).then((res) => {
        console.log(res);
        if(res.data.data){
            setrest(res.data.data);
  
        }else{
            setrest([]);
  
        }
      });
      axiosInstance
      .post(`/viewApprovedAgencies`)
      .then((res) => {
        console.log(res, "view hotel");
        if (res.data.data != undefined) {
            setagency(res.data.data);
        } else {
            setagency([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });

      axiosInstance
        .post(`/viewTaxis`)
        .then((res) => {
          console.log(res, "view hotel");
          if (res.data.data != undefined) {
            settaxi(res.data.data);
          } else {
            settaxi([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });

        axiosInstance
      .post(`/viewAllApprovedPlaces`)
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          setplace(res.data.data);
        } else {
          setplace([]);
        }
      })
      .catch((res) => {
        console.log(res);
      });
      
      
      axiosInstance
      .post(`/viewUsers`)
      .then((res) => {
        console.log(res);
        if (res.data.data) {
            setusers(res.data.data);
        } else {
            setusers([]);
        }
      })
      .catch((res) => {
        console.log(res);
      });

    }, []);

  return (
    <div>
      <AdminNav />
      <div id="root">
        <div class="container pt-5">
          <div class="row align-items-stretch mt-5 mb-5">
            <div class="c-dashboardInfo col-lg-4 col-md-6" style={{background:'none'}}>
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Registered Customers
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  {users.length}
                </span>
                <span class="hind-font caption-12 c-dashboardInfo__subInfo">
                  <Link class='cardDec' to='/admin_users' >View</Link>
                </span>
              </div>
            </div>
            <div class="c-dashboardInfo col-lg-4 col-md-6">
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Registered Restaurants
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  {rest.length}
                </span>
                <span class="hind-font caption-12 c-dashboardInfo__subInfo">
                  <Link class='cardDec' to='/admin_view_rest' >View</Link>
                </span>
              </div>
            </div>
            <div class="c-dashboardInfo col-lg-4 col-md-6">
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Registered Hotels
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  {data.length}
                </span>
                <span class="hind-font caption-12 c-dashboardInfo__subInfo">
                  <Link class='cardDec' to='/admin_view_hotels' >View</Link>
                </span>
              </div>
            </div>
            <div class="c-dashboardInfo col-lg-4 col-md-6">
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                Registered Agencies
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  {agency.length}
                </span>
                <span class="hind-font caption-12 c-dashboardInfo__subInfo">
                  <Link class='cardDec' to='/admin_view_agencies' >View</Link>
                </span>
              </div>
            </div>
            <div class="c-dashboardInfo col-lg-4 col-md-6">
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Registered Taxi
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  {taxi.length}
                </span>
                <span class="hind-font caption-12 c-dashboardInfo__subInfo">
                  <Link class='cardDec' to='/admin_view_taxi' >View</Link>
                </span>
              </div>
            </div>
            <div class="c-dashboardInfo col-lg-4 col-md-6">
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Tourist Places
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  {place.length}
                </span>
                <span class="hind-font caption-12 c-dashboardInfo__subInfo">
                  <Link class='cardDec' to='/ViewAdminPlace' >View</Link>
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminFirst;
