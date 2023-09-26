import React from "react";
import pic3 from "../img/pic3.webp";

function About() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div
              class="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px;" }}
            >
              <div class="position-relative h-100">
                <img
                  class="img-fluid position-absolute w-100 h-100"
                  src={pic3}
                  alt=""
                  style={{ objectFit: "cover;" }}
                />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 class="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 class="mb-4">
                Welcome to <span class="text-primary">Tourist Guide</span>
              </h1>
              <p class="mb-4">
              Welcome to our comprehensive tourism management system! Our platform offers a seamless and user-centric experience, designed to cater to all your travel needs. With dedicated modules for administrators, users, restaurants, and hotels, we've created a one-stop solution to enhance your travel journey. For administrators, managing tourism details, food options, hotels, routes, bookings, and transport information has never been easier. Users can explore, register, and access a wealth of information including restaurant and hotel details, route options, accommodation booking, and even discover nearby tourist attractions. With the ability to leave reviews, access previous travelers' feedback, and plan your own itinerary, you're in control of your travel experience. Restaurants and hotels also have their dedicated spaces to effortlessly register, login, and update their offerings, ensuring that the information provided to users is always up-to-date. Join us in revolutionizing the way you travel - whether you're an administrator, a business owner, or an enthusiastic traveler, our platform is here to simplify and enhance every aspect of your journey.
              </p>
              {/* <p class="mb-4">
                Joy Travels is a member of prestigious trade bodies like Kashmir
                tour and travel association and Just Dial and approved by
                Department of Tourism, Government of Jammu and Kashmir.
              </p> */}
              {/* <div class="row gy-2 gx-4 mb-4">
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>First
                    Class Flights
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>
                    Handpicked Hotels
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>5 Star
                    Accommodations
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Latest
                    Model Vehicles
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>150
                    Premium City Tours
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>24/7
                    Service
                  </p>
                </div>
              </div> */}
              {/* <a class="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
