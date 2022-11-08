import "../../css/home.css";
import "../../css/App.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";


function Button(props) {
    const color = useSelector((state)=> state.color)

  return (
<motion.button 
    whileHover={{scale:1.4}}
   whileTap={{scale:.5}}
className={props.class} style={{backgroundColor:color.color}} >
  {props.text + " " }</motion.button>
  );
}

export default Button;
