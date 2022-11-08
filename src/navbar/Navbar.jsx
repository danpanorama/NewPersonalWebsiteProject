import {  NavLink} from "react-router-dom";
import "./nav.css";
import "../css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { BsFillTelephonePlusFill,BsFillHouseDoorFill,BsFillBriefcaseFill,BsFillCollectionFill,BsFillPersonLinesFill,BsListNested,BsList } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

function Navbar(props) {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);
  const [windowState,setWindowState] = useState(false);
 




  useEffect(()=>{
    console.log(window.innerWidth)
    if(window.innerWidth < 1240){
      console.log('yesr')
      setWindowState(true)
    }else{
      setWindowState(false)
    }

  },[window.innerWidth])




  return (
    <div className={"NavBar  "}>
      <div onClick={props.opennav} className="icon padtop">
       
       {props.vis? <BsListNested/>:<BsList/>}
      </div>
      <div className="paddingNav flexcol ">
        <div className="flexcol divsmallwithd around">
          <div className={props.vis ?"logo":'visability'}>
            <h1 className="primeryHeader">DANIEL</h1>
          </div>
          <div className="linksList flexcol center">
            <div className="linfDiv flexrow">
              <NavLink className={"Linkjust"} to={"/home"}>
                {" "}
                <div className="flexrow center">
                  <p className="icon"><BsFillHouseDoorFill/></p>

                  <p className="Link">home</p>
                </div>
              </NavLink>
            </div>
            <div className="linfDiv flexrow">
              <NavLink className={"Linkjust"} to={"/about"}>
                <div className="flexrow center">
                  <p className="icon"><BsFillPersonLinesFill/></p>

                  <p className="Link"> About</p>
                </div>
              </NavLink>
            </div>
            <div className="linfDiv flexrow ">
              <NavLink className={"Linkjust"} to={"/projects"}>
                <div className="flexrow  center">
                  <p className="icon"><BsFillCollectionFill/></p>

                  <p className="Link">projects</p>
                </div>
              </NavLink>
            </div>
            <div className="linfDiv flexrow">
              <NavLink className={"Linkjust"} to={"/home"}>
                {" "}
                <div className="flexrow center">
                  <p className="icon"><BsFillBriefcaseFill/></p>

                  <p className="Link">service</p>
                </div>
              </NavLink>
            </div>
           
              <div className="linfDiv flexrow">
              <NavLink className={"Linkjust"} to={"/contact"}> <div className="flexrow center">
              <p className="icon"><BsFillTelephonePlusFill/></p>
                <p className="Link">contact</p>
              </div>
              </NavLink>  </div>{" "}
          

            {/* <div className="linfDiv flexrow">
              <p className="icon">icon</p>

              <NavLink className={"Link"} to={"/home"}>
                home
              </NavLink>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
