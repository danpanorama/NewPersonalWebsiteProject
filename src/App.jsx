
import './css/App.css';
import './css/loader.css';

import NavRoute from './navbar/NavRoute';
import { BsGear } from "react-icons/bs";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { changeColorAction } from './Redux/Actions/colorsActions';


function App() {

  const [Active,setActiveState]= useState(false)
  const dispatch = useDispatch()

  const loader = useSelector((state) => state.Loader);

  function changeColor(e){
    console.log(e.target.id)
    dispatch(changeColorAction(e.target.id))

  }

  return (

    <div className="App">

     <div className="flexrow poscolor">
     

     <div className={Active?" activecolors":"changeColor"}>
        <p className="text">choose color</p>
        <div className="colorsList flexrow">
          <motion.p whileHover={{scale:1.1}} whileTap={{scale:.6}} onClick={changeColor} id='royalblue' className="royalblue cir"></motion.p>
          <motion.p whileHover={{scale:1.1}} whileTap={{scale:.6}} onClick={changeColor}id='orange' className="orange cir"></motion.p>
          <motion.p whileHover={{scale:1.1}} whileTap={{scale:.6}} onClick={changeColor}id='pink' className="pink cir"></motion.p>
          <motion.p whileHover={{scale:1.1}} whileTap={{scale:.6}} onClick={changeColor}id='blueviolet' className="blueviolet cir"></motion.p>
          <motion.p whileHover={{scale:1.1}} whileTap={{scale:.6}} onClick={changeColor}id='green' className="green cir"></motion.p>
          <motion.p whileHover={{scale:1.1}} whileTap={{scale:.6}} onClick={changeColor}id='yellow' className="yellow cir"></motion.p>
        </div>
      </div> 
      <div  onClick={()=>{setActiveState(!Active)}} className="system"><motion.p whileHover={{scale:1.1}} animate={{rotate: Active? 360:0}} className="textsys"><BsGear/></motion.p></div>
     </div>
  
  <NavRoute/>
 


<div className={loader.Loader? "activeLoader":"disableLoader"}>

</div>

     
    </div>
  );
}

export default App;
