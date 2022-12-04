import "../../css/home.css";
import "../../css/App.css";
import {useSelector } from "react-redux";
import Image1 from '../../image/gdan.png'
import Button from "../buttons/Button";
import PDF from '../../image/GOOD_CV.pdf'


function Headers() {

  const color = useSelector((state)=> state.color)

  return (
<div className="  flexrowtocolreversr">
  <div className=" h100 wordsSide">
  <div className="flexcol between   headers  ">
     <div className="">
     <h1 className="headerBig ">Hello my name is <span style={{color:color.color}} className="styleText">daniel morcos</span></h1>
      <h1 className="headerBig">i'm a web developer</h1>
      <p className="peregraph">
      I am a Freelance Web designer with 3 years of experience. A fast learner and enthusiastic about Web Programming 
      </p>
     </div>

      <div className="buttonPrimery">
        <a href="#about">
        <Button class={"primeryBTN"} text={'more about me'}/></a>
        <a class="btn line-btn-dark btn-icon btn-radius" href={PDF} title="" download>
   <Button class={"resumeBTN"}  text={'resume'}/></a>

      </div>

    </div>
  </div>
  <div style={{backgroundColor:color.color}}  className="imageSide flexcol center">
   <img src={Image1} alt="" className="img" />

  </div>
</div>
  );
}

export default Headers;
