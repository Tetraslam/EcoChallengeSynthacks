import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import { Dialog, Menu, Transition } from '@headlessui/react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import Achievements from './achievements';
import Component from 'react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'))

function Habit() {
  
 const element = (

 
    <>
      
    <Helmet>
      <title>Habit Tracker | EcoChallenge</title>
    </Helmet>
    
    <Sidebar/>
    
    </>
 )
 root.render(element)
  
}
export default Habit;