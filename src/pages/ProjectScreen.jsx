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

import ProjectComp from "../components/project/ProjectComp";
import { useEffect } from "react";

function ProjectScreen() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const AnimationBatchmethod = batch(Sticky(), Fade(), MoveOut(0, -200));
  const AnimationBatchPage2 = batch(FadeIn(), StickyIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());
  return (
        <motion.div
        className="bcbr paddingHome flexcol   paddingleftright"
        initial={{ width: 0 }}
        animate={{ width: "70%",paddingTop:'100px' ,margin:"0 auto",paddingLeft: "15px",animationDuration: "2s" }}
        exit={{ position: "absolute", top: 0, left: 0 }}
      ><ScrollContainer >
  
      

          
<ProjectComp/>

<br />
       
    
    </ScrollContainer>  
    </motion.div>
  );
}

export default ProjectScreen;
