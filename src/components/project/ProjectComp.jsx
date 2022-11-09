import "../../css/home.css";
import "../../css/App.css";
import "../../css/projects.css";

import TextBorder from "../text/TextBorder";

import {  useSelector } from "react-redux";


function ProjectComp() {
  const color = useSelector((state) => state.color);

  return (
   <div className=" paddleft">
      <h1 className="headerBig">my projects</h1>
      <TextBorder color={  color.color } />

      <p className="peregraph2">
        my last projects :
      </p>
     <div className="gridTree  ">
        <div className="card p1">
            <div className="buttonProject"><a href="https://morcmario.com/" className="textproj">see more</a></div>

        </div>
        <div className="card p2">
            <div className="buttonProject"><a href=" https://samia.co.il/" className="textproj">see more</a></div>
            </div>
            <div className="card p3">
            <div className="buttonProject"><a href="https://smohalsol.netlify.app/" className="textproj">see more</a></div>
            </div>
            <div className="card p4">
            <div className="buttonProject"><a href="https://peppy-croquembouche-d943b8.netlify.app/" className="textproj">see more</a></div>
            </div>
            <div className="card p5">
            <div className="buttonProject"><a href="https://awesome-bardeen-b42792.netlify.app/" className="textproj">see more</a></div>
            </div>
            <div className="card p6">
            <div className="buttonProject"><a href="https://francomorcos.netlify.app/" className="textproj">see more</a></div>
            </div>
            <div className="card p7">
            <div className="buttonProject"><a href="https://venerable-paletas-590aee.netlify.app/" className="textproj">see more</a></div>
            </div>

  
    </div>
   </div>
  );
}

export default ProjectComp;
