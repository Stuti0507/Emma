import React from 'react'
import "./Dash.css"
import {NavLink} from 'react-router-dom'
import BalloonPoppingGame from './BalloonPoppinGame'
import PlantTherapy from './PlantTherapy'
import BreathCard from './BreathCard'
import CanvasDis from './CanvasDis'
import ComingSoon from './ComingSoon'
import MotivationalQuotes from './MotivationalQuotes'
import AnimatedBot from './AnimatedBot'
const Dashboard = () => {
  return (
    <div id="backda">
     <nav id='dasnav'>
       <NavLink to="/dashboard" className="DNA" >HOME</NavLink>
       <NavLink to="/chatwithemma"  className="DNA">CHAT WITH EMMA</NavLink>
       <NavLink to="/canvas" className="DNA">CANVAS</NavLink>
       <NavLink to="/breathing" className="DNA">BREATHING EXERCISE</NavLink>
       <NavLink to="/Product" className="DNA">PRODUCT</NavLink>
       <NavLink to="/Aboutus" className="DNA">ABOUT US</NavLink>
     </nav>
     <div id="talk">
     <div id="comp1">
      <div>
        <h1>
          CHAT WITH EMMA
        </h1>
        <p>
          Your Personel Therapist
        </p>
        <button id='let'  >
        <NavLink to="/chatwithemma" id='BUTCHAT' className="DNA">LET'S TALK</NavLink>

        </button>
      </div>
      <div id="emmm">
       <AnimatedBot />
       </div>
      </div>
     </div>
     <div id="comp2">
      <div className="box3">
       <NavLink to="/canvas" className='ca' id='cn'>
       <CanvasDis />
       </NavLink>
      </div>
      <div className="box3">
      <NavLink to="/breathing" className='ca' id='br'>
      <BreathCard />
      </NavLink>
        </div>
        <div className="box3">
        <div  className='ca' id='soon' >
        <ComingSoon 
        gradientStart="#FF4081"
        gradientEnd="#F50057"
        background="#4e9be4"
        dotColor="#FF4081"
        dotSize={6}
        speed={2}
      />
        </div>
        </div>
     </div>
     <div id="comp3">
      <div id="box4">
      <BalloonPoppingGame />
      </div>
      <div id="box5">
      <div id="box51"  >
    <MotivationalQuotes />
</div>
<div id="box52">

<PlantTherapy />
</div>
      </div>
     </div>
    </div>
  )
}

export default Dashboard
