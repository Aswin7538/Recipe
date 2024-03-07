// import React, { useEffect, useState } from 'react'
// import Card from 'react-bootstrap/Card';
// import axios from 'axios'
import { Catagory } from './Catogory'
import './Main.css'
import img1 from './image/main.jpg'



 


export const Main = () => {
  

  return (
    <div>
           <div className="container-fluid">
      <div className="row">
        <div className="col-12 background-container" style={{backgroundImage: `url(${img1})`}}>
          <div className="overlay-text">
            <h1>Find recipes for every occasion <br />
                       cCooking never was easier</h1>
                       <div id="container">
  <button class="learn-more">
    <div class="circle">
      <span class="icon arrow"></span>
    </div>
    <p class="button-text">Let's Cook</p>
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
          

           {/* <div className='cat1'>Catogories</div> */}
                      
                    {/* <Catagory/> */}

      </div>
           

          

            
  
  )
}
