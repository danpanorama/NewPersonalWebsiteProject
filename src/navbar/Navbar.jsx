import { Routes, NavLink, Route, Router } from "react-router-dom";
import "./nav.css";
import "../css/App.css";
import { useDispatch,useSelector } from "react-redux";
import { activeLoaderReducer } from "../Redux/Actions/LoaderActions";

function Navbar(props) {
  const dispatch = useDispatch();
  const color = useSelector((state)=> state.color)

  return (
    <div className="NavBar  ">
      <div className="paddingNav flexcol ">
        <div className="flexcol divsmallwithd around">
          <div className="logo">
            <h1 className="primeryHeader">DANIEL</h1>
          </div>
          <div className="linksList flexcol center">
            <div className="linfDiv flexrow">
              <div className="flexrow center">
                <p className="icon">icon</p>

                <NavLink  className={"Link"} to={"/home"}>
                  home
                </NavLink>
              </div>
            </div>
            <div className="linfDiv flexrow">
              <div className="flexrow center">
                <p className="icon">icon</p>

                <NavLink  className={"Link"} to={"/home"}>
                  About
                </NavLink>
              </div>
            </div>
            <div className="linfDiv flexrow ">
              <div className="flexrow  center">
                <p className="icon">icon</p>

                <NavLink   className={"Link"} to={"/home"}>
                  projects
                </NavLink>
              </div>
            </div>
            <div className="linfDiv flexrow">
          <div className="flexrow center">
          <p className="icon">icon</p>

<NavLink  className={"Link"} to={"/home"}>
  serves
</NavLink>
          </div>
            </div>
            <div className="linfDiv flexrow">
              <p className="icon">icon</p>

              <NavLink  className={"Link"} to={"/home"}>
                contact
              </NavLink>
            </div>
            <div className="linfDiv flexrow">
              <p className="icon">icon</p>

              <NavLink  className={"Link"} to={"/home"}>
                home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
