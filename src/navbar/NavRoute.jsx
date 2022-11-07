import { Routes, useLocation, Route, Router } from "react-router-dom";
import HomeScreen from "../pages/HopeScreen";
import Navbar from "./Navbar";
import '../css/App.css';
import { useState } from "react";

import {AnimatePresence} from 'framer-motion';
import AboutScreen from "../pages/AboutScreen";
import ContactScreen from "../pages/ContactScreen";
import ProjectScreen from "../pages/ProjectScreen";

function NavRoute() {
  const location =useLocation()
  const [activeNav,setActiveNav] = useState(false);

  function opennav(){
    setActiveNav(!activeNav)

  }
  function closenav(){
    if(activeNav){
      setActiveNav(false);
    }
    
  }
  return (
    <div className="flexrow " onClick={closenav}>
    <div className="width20">

    </div>
      <div className={activeNav?"position_nav_whitehr  ":"position_nav"}>
      <Navbar opennav={opennav} vis={activeNav} activeNav={activeNav} />
      </div>
      <AnimatePresence>
       
        
      <Routes location={location} key={location.path} >
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/*" element={<HomeScreen />} exact />
        <Route path="/about" element={<AboutScreen />} exact />
        <Route path="/contact" element={<ContactScreen />} exact />

        <Route path="/projects" element={<ProjectScreen />} exact />



        {/* <Routes path="/404" element={<Nofuondpage/>} exact/> */}
      </Routes>  
        
      </AnimatePresence>
    </div>
  );
}

export default NavRoute;
