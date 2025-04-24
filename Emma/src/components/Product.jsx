import React from 'react'
import "./Product.css"
import {NavLink} from 'react-router-dom'
const Product = () => {
  return (
    <div id='product'>
        <nav id='navpro'>
            <NavLink to="/dashboard" className="DNA">HOME</NavLink>
        </nav>
      <div id="api">
       <div id="heading">
        <div id="rocket">
          <video src="./img2/bottt.gif"></video>
        </div>
        <div id="startline">
           <h1>API FOR EVERYONE</h1>
           <p>CREATE YOUR FIRST API KEY AND INTEGRATE EMMA IN YOUR PROJECT</p>
        </div>
       </div>
       <div id="contentapi">
      <p>Getting Started</p>
      <div id="apicont">
        <div className="box">
          <div id="img1">
          </div>
          <div id="innbox">
          <h3>QUICK START</h3>
          <h6>A SET OF SIMPLE TUTORIALS WITH CODE SNIPPETS ON HOW TO USE EMMA AND INTEGRATE EMMA IN YOUR PROJECT</h6>
          </div>
        </div>
        <div className="box">
        <div id="img2">
          </div>
          <div id="innbox">
          <h3>API KEY</h3>
          <h6>GENRATE  YOUR PERSONEL API KEY FOR API INTEGRATION  </h6>
          </div>
        </div>
        <div className="box">
        <div id="img3">
          </div>
          <div id="innbox">
          <h3>API DOCUMENTATION</h3>
          <h6>API INTEGRATION DOCUMENTATION FOR ALL FUNCTIONALITY REGARDING EMMA</h6>
          </div>
        </div>
        <div className="box">
        <div id="img4">
          </div>
          <div id="innbox">
          <h3>HELPERS LIBRARIES</h3>
          <h6>LIBRARIES TO HELP YOU INTERATC WITH EMMA API'S IN NODE JS,RUBY,PYTHON,PHP,JAVA AND MORE </h6>
          </div>       
        </div>
      </div>
       </div>
      </div>
      <div id="subs">
        <div id="money"></div>
       <h1>SUBSCRIPTION PLAN</h1>
       <div id="c1" className='coins'></div>
       <div id="c2" className='coins'></div>
       <div id="plans">
        <div className="plan" id='pl1'>
        <div className="price">
        ₹300/MONTH
        </div>
        <div className="desprice">
          STANDARD PASS
        </div>
        <ul>
            <li>UNLIMITED ACCESS TO EMMA</li>
            <li>24/7 SUPPORT</li>
            <li>EARLY ACCES TO NEW FEATURES</li>
            

          </ul>
        <button>BUY</button>

        </div>
        <div className="plan" id='pl2'>
        <div className="price">
        ₹700/MONTH
        </div>
        <div className="desprice">
          SUPER PASS
          </div>
          <ul>
            <li>STANDARD PASS BENIFITS</li>
            <li>PREMIUM PASS BENIFITS</li>
            <li>PERSONLISED THERAPY</li>
          </ul>
          <button>BUY</button>
        </div>
        <div className="plan" id='pl3'>
        <div className="price">
        ₹550/MONTH
          </div>
          <div className="desprice">
          PREMIUM PASS
          </div>
          <ul>
            <li>STANDARD PASS BENIFITS</li>
            <li>ACCESS TO ALL THERAPY TOOLS</li>
            <li>MEMORY PRESERVATION</li>
          </ul>
          <button>BUY</button>

        </div>
       </div>
      </div>
      <div id="footer">
        
      </div>
    </div>
  )
}

export default Product
