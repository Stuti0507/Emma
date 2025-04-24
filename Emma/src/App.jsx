import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/Home"
import Dashboard from './components/Dashboard';
import Canvas from './components/Canvas';
import BalloonPoppingGame from './components/BalloonPoppinGame';
import PlantTherapy from './components/PlantTherapy';
import BreathingExercise from './components/BreathingExercise';
import MotivationalQuotes from './components/MotivationalQuotes';
import AnimatedBot from './components/AnimatedBot';
import Product from './components/Product';
import ChatwithEmma from './components/ChatwithEmma';
import About from './components/About';

function App() {
  const router=createBrowserRouter(
    [
     {
      path:"/",
      element:
      <div>
        <Home />
      </div>
     },
     {
      path:"/dashboard",
      element:
      <div>
        <Dashboard />
      </div>
     },
     {
      path:"/canvas",
      element:
      <div>
        <Canvas />
      </div>
     },
     {
      path:"/breathing",
      element:
      <div>
        <BreathingExercise/>
      </div>
     },
     
     {
       path:"/Product",
       element:
       <div>
        <Product />
        </div>
     },
     {
      path:"/chatwithemma",
      element:
      <div>
        <ChatwithEmma/>
      </div>
     },
     {
      path:"/Aboutus",
      element:
      <div>
        <About/>
      </div>
     },
      
    ]
  );
  return(
    <RouterProvider router={router} />
  )
}

export default App
