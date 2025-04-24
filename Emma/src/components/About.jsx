import React from 'react'
import  "./About.css"
import {NavLink} from 'react-router-dom'
const About = () => {
  return (
    <div id='Aboutus'>
      <nav id='aboutnav'> 
        <NavLink to="/dashboard" className='DNA'>HOME</NavLink>
      </nav>
      <div id="iconn"></div>
      <div id="emmma"></div>
      <div id='a1'>
        <p id='a11'>ABOUT US</p>
      </div>
      <div id="intro">
      I am EMMA who listens, understands, and helps you navigate tough moments. Whether you’re feeling anxious, unmotivated, or just need someone to talk to,I am here to lift you up.
It’s not just about answers—it’s about understanding you. I  offers gentle encouragement, calming techniques, and little reminders that you’re not alone. Think of me as your personal support system, ready to help whenever
life feels overwhelming. 💙
      </div>
      <div id="iconn1"></div>
      <div id="creater">
        
      </div>
    </div>
  )
}

export default About
