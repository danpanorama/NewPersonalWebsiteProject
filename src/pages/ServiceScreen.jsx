import { useDispatch, useSelector } from "react-redux";
import "../css/home.css";
import "../css/App.css";
import { motion } from "framer-motion";

import { useEffect } from "react";

function ServiceScreen() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const AnimationBatchmethod = batch(Sticky(), Fade(), MoveOut(0, -200));
  const AnimationBatchPage2 = batch(FadeIn(), StickyIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());
  return (
        <motion.div
        className="bcbr paddingHome flexcol   "
        initial={{ width: 0 }}
        animate={{ width: "80%",paddingTop:'100px' ,paddingLeft: "20px",animationDuration: "2s" }}
        exit={{ position: "absolute", top: 0, left: 0 }}
      ><ScrollContainer>
  
        <ScrollPage page={0}>


          


        </ScrollPage>
    
    </ScrollContainer>  
    </motion.div>
  );
}

export default ServiceScreen;
