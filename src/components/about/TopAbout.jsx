import "../../css/home.css";
import "../../css/App.css";

import { useSelector } from "react-redux";


function TopAbout(props) {
  const color = useSelector((state) => state.color);

  return (
  
  
        <div className="headers">
          <h1 className="headerBig" >i'm daniel Morcos and  <span  style={{ color: color.color }} >Web Developer</span> </h1>
          <p className="peregraph">
          Developing and Designing Web from 2018. These days I am a freelance Full stack developer that codes my clients and friends ideas. I enjoy building websites, business cards and more.
Let me Develop your idea!
              </p>
        </div>

    
   
  );
}

export default TopAbout;
