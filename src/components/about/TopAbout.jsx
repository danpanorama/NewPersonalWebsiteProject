import "../../css/home.css";
import "../../css/App.css";
import TextBorder from "../text/TextBorder";

import { useDispatch, useSelector } from "react-redux";
import Button from "../buttons/Button";
import {BsFillFileEarmarkRichtextFill } from "react-icons/bs";
import CombineHeaders from "../text/CombineHeaders";

function TopAbout(props) {
  const color = useSelector((state) => state.color);

  return (
  
  
        <div className="headers">
          <h1 className="headerBig" >i'm daniel Morcos and  <span  style={{ color: color.color }} >Web Developer</span> </h1>
          <p className="peregraph">
          I started my career in 2018 as a website developer and progressed from there to full stack developer. Today I am a freelancer who builds websites and digital business cards and more.
 I really like to program and design.
Let me develop your next app          </p>
        </div>

    
   
  );
}

export default TopAbout;
