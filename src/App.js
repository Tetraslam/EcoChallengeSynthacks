import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import { Dialog, Menu, Transition } from '@headlessui/react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import Achievements from './achievements';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    <>

    <Helmet>
      <title>Hello</title>
    </Helmet>
    
    <Sidebar/>
    <Achievements></Achievements>
    </>
  );
}

export default App;
