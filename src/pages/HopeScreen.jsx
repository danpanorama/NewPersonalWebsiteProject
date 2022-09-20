import { useDispatch, useSelector } from "react-redux";
import "../css/home.css";
import "../css/App.css";
import Headers from "../components/home/Headers";


import Img from "../image/j.png";
import AboutSection from "../components/about/AboutSection";

function HomeScreen() {

  
  return (
    <div className="paddingHome flexcol    bcb">
     <div className="openingDiv   flexcol  center  ">
     
        <Headers/>
    
      
     </div>
     <div className="page2">
      <AboutSection/>
     </div>
      
      
      
    </div>
  );
}

export default HomeScreen;
