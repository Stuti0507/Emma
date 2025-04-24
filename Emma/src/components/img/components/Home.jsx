import React from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'
const Home = () => {
  return (
    <div id='home'>
      <ul class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
<div id='main'>
 <div id='emma'></div>
 <div id="content">
    <p id='emm'>Emma</p>
    <p id='emm1'>Your emotional Support</p>
    <button>Login</button>
    <NavLink to="/dashboard">
    <button>Get Started</button>
    </NavLink>
 </div>
</div>
    </div>
  )
}

export default Home
