import "../css/home.css";
import "../css/App.css";
import { motion } from "framer-motion";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Move,
  batch,
  Sticky,
  MoveOut,
  Fade,
  StickyIn,
  FadeIn,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import AboutSection from "../components/about/AboutSection";
import { useEffect } from "react";

function AboutScreen() {
  



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const AnimationBatchmethod = batch(Sticky(), Fade(), MoveOut(0, -200));
  const AnimationBatchPage2 = batch(FadeIn(), StickyIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());
  return (
        <motion.div
        className="bcbr paddingHome flexcenter   "
        initial={{ width: 0 }}
        animate={{ width: "80%",paddingTop:'100px',paddingLeft:'20px' ,animationDuration: "2s" }}
        exit={{ position: "absolute", top: 0, left: 0 }}
      >
  <div className="paddingHome ">

<AboutSection/>

  </div>
        




      
    
 
    </motion.div>
  );
}

export default AboutScreen;
