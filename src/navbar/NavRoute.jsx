import { Routes, useLocation, Route, Router } from "react-router-dom";
import HomeScreen from "../pages/HopeScreen";
import Navbar from "./Navbar";
import '../css/App.css';

import {AnimatePresence} from 'framer-motion';
import AboutScreen from "../pages/AboutScreen";

function NavRoute() {
  const location =useLocation()
  return (
    <div className="flexrow ">
    <div className="width20">

    </div>
      <div className="position_nav  ">
      <Navbar />
      </div>
      <AnimatePresence>
       
        
      <Routes location={location} key={location.path} >
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/*" element={<HomeScreen />} exact />
        <Route path="/about" element={<AboutScreen />} exact />

        {/* <Routes path="/404" element={<Nofuondpage/>} exact/> */}
      </Routes>  
        
      </AnimatePresence>
    </div>
  );
}

export default NavRoute;
