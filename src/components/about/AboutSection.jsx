import "../../css/home.css";
import "../../css/App.css";
import TextBorder from "../text/TextBorder";
import { useSelector } from "react-redux";
import TopAbout from "./TopAbout";
import StatesAbout from "./StatesAbout";

function AboutSection() {
  const color = useSelector((state) => state.color);

  return (
    <div id='about' className="h100vh about ">
      <h1 className="headerBig">about me</h1>
      <TextBorder color={  color.color }  />
      <div className="box">
       <TopAbout/>

       <StatesAbout/>
      </div>
    </div>
  );
}

export default AboutSection;
