import { useDispatch, useSelector } from "react-redux";
import "../css/home.css";
import "../css/App.css";
import { motion } from "framer-motion";
import {Animator, ScrollContainer, ScrollPage,Move,batch,Sticky,MoveOut,Fade, StickyIn, FadeIn, ZoomIn, ZoomOut} from 'react-scroll-motion'
import Img from '../image/j.png'

function AboutScreen() {
  const AnimationBatchmethod = batch(Sticky(),Fade(),MoveOut(0,-200));
  const AnimationBatchPage2 = batch(FadeIn(),StickyIn(),ZoomIn());
  const FadeUp = batch(Fade(),Sticky(),Move());
  return (

     <ScrollContainer>
<ScrollPage page={0}>
      <Animator animation={AnimationBatchmethod}>
     
<motion.div
      className="  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity:0,transitionDelay:'1s' }}
    >
      <motion.div  
       initial={{opacity:0, transform: 'translateY(-100px)',transitionDuration:'1s' }}
      animate={{opacity:1, transform: 'translateY(0)',transitionDuration:'1s' }}
      exit={{  transform: 'translateY(-100px)' ,transitionDuration:'1s'}}>
<h2>hello there</h2>
</motion.div>
     </motion.div>

     </Animator>
    </ScrollPage>

    <ScrollPage page={2}>
    
      <Animator animation={batch(Sticky(),Fade())}>
     
      <h2>and welcome to my website</h2>
      <div className="bcme">
</div>
     
      </Animator>
      
    </ScrollPage>
    <ScrollPage page={4}>
    <div className="bc">
    
    <div className="onegrid xx1"></div>
        <div className="onegrid xx2"></div>
        <div className="onegrid xx6"></div>
        <div className="onegrid xx3"></div>
        <div className="onegrid xx5"></div>
        <div className="onegrid xx4"></div>
        <div className="onegrid xx1"></div>
        <div className="onegrid xx2"></div>
        <div className="onegrid xx6"></div>
        <div className="onegrid xx3"></div>
        <div className="onegrid xx5"></div>
        <div className="onegrid xx4"></div>
      
      <Animator animation={  batch(Sticky(),Fade(),ZoomOut())}>
  
     
      <h2 className="danielheader">i am Daniel</h2>
     
     
      </Animator>
      

      </div>
    </ScrollPage>
    <ScrollPage page={6}>
      <Animator animation={AnimationBatchmethod}>
     
      <img src={Img} alt="" />
     
      </Animator>
    </ScrollPage>
    <ScrollPage page={8}>
      <div className="slideSection">

      
 
 <Animator animation={AnimationBatchmethod}>
     

   
     </Animator>
     </div>
 
    </ScrollPage>
    
    <ScrollPage page={10}>
      <Animator animation={AnimationBatchPage2}>
     
      <h2>i am a Full-Stack Programmer Engeneer</h2>
    
      </Animator>
    </ScrollPage>
    <ScrollPage page={12}>
      <Animator animation={AnimationBatchmethod}>
     
      <h2>i start my creare as a freelancer ang grow up to be a proffesional designer 
        my dreem is to design for you the best website application and for that i will use the newest technologic and the updated feachers to able to create the most greatest mechean for you to use
      </h2>
    
      </Animator>
    </ScrollPage>


    <ScrollPage page={14}>
 
 <Animator animation={FadeUp}>
     
     <h2>welcome to my website</h2>
   
     </Animator>
 
    </ScrollPage>

    


     </ScrollContainer>

   

  );
}

export default AboutScreen;
