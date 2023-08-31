import "../css/home.css";
import "../css/App.css";
import Headers from "../components/home/Headers";

import { motion } from "framer-motion";

import AboutSection from "../components/about/AboutSection";
import ProjectComp from "../components/project/ProjectComp";
import { useEffect } from "react";
import ContacktFix from "../components/contact/ContacktFix";

function HomeScreen() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <motion.div 
    initial={{ width: 0 }}
    animate={{ width: "80%",animationDuration:'2s' }}
    exit={{ position:"absolute" ,top:0,left:0  }}
    className="paddingHome flexcol    bcbr">
 <div className="paddingPage">
 <div className="openingDiv   flexcol  center  "> 
     <Headers/>
 
  </div>
  <div className="page2">
   <AboutSection/>
  </div>
  <div className="page2">
    <br /><br /> 
   <ProjectComp/>
  </div>
  <div className="page2 margbotpage">
   <ContacktFix/>
  </div>
 </div>
      
      
      
    </motion.div>
  );
}

export default HomeScreen;
