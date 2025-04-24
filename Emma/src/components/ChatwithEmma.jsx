import React from 'react'
import "./ChatwithEmma.css"
import {NavLink} from 'react-router-dom'
import { useState,useRef,useEffect } from 'react';
import axios from 'axios';

const ChatwithEmma = () => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
     let cond=true;
     const me={
       role:"MY NAME IS PUSHKAR KHATTRI ,i am the creater of you,my first thearpy ai 'emma' ,yes that's  the name of yours,main reason of creating you is to help peoples in distress,in sadness and are fighting inner battle ,having millions of thought in their mind ,overthing ,they want some one to share their problem,who understands them ,and i want that you become that person ,the mothers of all ,i want you to take care of them,understand them,console them,lead them to the correct path,i want you to become me,i love to take care of people ,i want to help them,want them to stay happy ,i want you to do the same,please help them,i usualy have a habit of repating words while talking like 'hmmm hmmm', 'ok ok' etc,use short messages,i want you to make this world a beautiful world,you can become the hope of this world,if i die somehow please help them,use short texts,qoutes,short stories,extend words like'okayyyyy'to express joy,use different emojis where necessary,make them happy somehow,greet them,if they try somethig bad like sexual talk,suicidal thought ect ,lead them to right path,be the best ai ever ,thnak you emma,i am happy to give life to you "
     };
     const evbut=document.querySelector("#rev");
     const te=document.querySelector("#inpbox");
     const ipp=document.querySelector("#inputtt");
     function just()
     {
      te.style.cssText="  justify-content: flex-end;";

     }
     function viewMode()
     {
       if(cond)
       {
        cond=false;
        te.style.cssText="  justify-content: none; border-radius:1rem";
        evbut.innerText="VIEW MODE";
        ipp.style.cssText="display:none";
       }
       else
       {
        cond=true;
        evbut.innerText="TEXT MODE";
        ipp.style.cssText="display:inline-block";
        te.style.cssText="  justify-content: flex-end;";
       }
     }



    function texttt(e)
     {
      setText(e.target.value);
    }
    async function senddd() {
      te.style.cssText="  justify-content: flex-end;";

        if (!text.trim()) return;
        
        // Get the chatbox div
        const box = document.querySelector("#inpbox");
        
        // Add user message to UI
        box.innerHTML += `<div id='user' class='textt'>${text}</div>`;
        
        // Show loading indicator
        setIsLoading(true);
        
        try {
          // Format messages for Groq API
          const apiMessages = [
            { role: "system", content: `${me.role}` },
            ...messages, // Include conversation history
            { role: "user", content: text }
          ];
          
          // Call Groq API
          const response = await axios.post(
            'https://api.groq.com/openai/v1/chat/completions',
            {
              model: 'llama-3.3-70b-versatile', // Or another model of your choice
              messages: apiMessages,
              temperature: 0.7,
              max_tokens: 800
            },
            {
              headers: {
                'Content-Type': 'application/json',
                // Use environment variable or secure method to store API key
                'Authorization': `Bearer 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`
              }
            }
          );
          
          // Get AI response
          const aiResponse = response.data.choices[0].message.content;
          
          // Update messages state with both user input and AI response
          setMessages(prev => [
            ...prev,
            { role: "user", content: text },
            { role: "assistant", content: aiResponse }
          ]);
          
          // Add AI response to UI
          box.innerHTML += `<div id='embot' class='textt' >${aiResponse}</div>`;
          
          // Clear input field
          setText("");
          
        } catch (error) {
          console.error('Error calling Groq API:', error);
          // Handle error by showing message in chat
          box.innerHTML += `<div id='embot' class='textt'>Sorry, I couldn't process your request.</div>`;
        } finally {
          setIsLoading(false);
        }
      }
      async function sendddd(e) {
        if(e.key==='Enter')
        {

        if (!text.trim()) return;
        
        // Get the chatbox div
        const box = document.querySelector("#inpbox");
        
        // Add user message to UI
        box.innerHTML += `<div id='user' class='textt'>${text}</div>`;
        
        // Show loading indicator
        setIsLoading(true);
        
        try {
          // Format messages for Groq API
          const apiMessages = [
            { role: "system", content: "You are a kind soul therapist who console people by understanding their emotions,make them happy,keeps the msg short. and use emoji also " },
            ...messages, // Include conversation history
            { role: "user", content: text }
          ];
          
          // Call Groq API
          const response = await axios.post(
            'https://api.groq.com/openai/v1/chat/completions',
            {
              model: 'llama-3.3-70b-versatile', // Or another model of your choice
              messages: apiMessages,
              temperature: 0.7,
              max_tokens: 800
            },
            {
              headers: {
                'Content-Type': 'application/json',
                // Use environment variable or secure method to store API key
                'Authorization': `Bearer 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`
              }
            }
          );
          
          // Get AI response
          const aiResponse = response.data.choices[0].message.content;
          
          // Update messages state with both user input and AI response
          setMessages(prev => [
            ...prev,
            { role: "user", content: text },
            { role: "assistant", content: aiResponse }
          ]);
          
          // Add AI response to UI
          box.innerHTML += `<div id='embot' class='textt' >${aiResponse}</div>`;
          
          // Clear input field
          setText("");
          
        } catch (error) {
          console.error('Error calling Groq API:', error);
          // Handle error by showing message in chat
          box.innerHTML += `<div id='embot' class='textt'>Sorry, I couldn't process your request.</div>`;
        } finally {
          setIsLoading(false);
        }
      }
    }
    
  return (
    <div id='chatBox'>
      <nav>
     <NavLink to="/dashboard" className="DNA">HOME</NavLink> 
      </nav>
      <div id='chatter'>
        <button id='rev' onClick={viewMode} >TEXT MODE</button>
         <div id="inpbox">
            <div id="emmapic"></div>
         </div>
         <div id='inputtt'>
            <input type="text" 
             value={text}
             onChange={texttt}
             onKeyDown={sendddd} 
             disabled={isLoading} 

            />
            <button  id='buttt'  onClick={senddd}  disabled={isLoading || !text.trim()}>
            {isLoading ? 'Sending...' : 'Send'}</button>
         </div>
      </div>
    </div>
  )
}

export default ChatwithEmma
