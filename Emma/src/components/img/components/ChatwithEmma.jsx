import React from 'react'
import "./ChatwithEmma.css"
import {NavLink} from 'react-router-dom'

const ChatwithEmma = () => {
  return (
    <div id='chatBox'>
      <nav>
     <NavLink to="/dashboard" className="DNA">HOME</NavLink> 
      </nav>
      <div id='chatter'>
         <div id="inpbox">
            <div id="emmapic"></div>
         </div>
         <div id='inputtt'>
            <input type="text" />
            <button>Send</button>
         </div>
      </div>
    </div>
  )
}

export default ChatwithEmma
