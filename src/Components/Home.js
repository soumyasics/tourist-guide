import React from 'react'
import About from './About'



function Home() {
  return (
    <div>
      
     
        <div class="container-fluid bg-primary py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row justify-content-center py-5">
                    <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-3 text-white mb-3 animated slideInDown home_head_div">Enjoy Your Vacation With Us</h1>

                        <p class="fs-4 text-white mb-4 animated slideInDown sub_home_head_div">' Some moments are very special, Because it's never to be get back '</p>
                        {/* <div class="position-relative w-75 mx-auto animated slideInDown">
                            <input class="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand"/>
                            <button type="button" class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{marginTop: '7px'}}>Search</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        <About/>
    </div>
  )
}

export default Home