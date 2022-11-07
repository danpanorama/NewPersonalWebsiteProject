import "../../css/home.css";
import "../../css/App.css";
import TextBorder from "../text/TextBorder";

import { useDispatch, useSelector } from "react-redux";
import Button from "../buttons/Button";
import {BsFillFileEarmarkRichtextFill } from "react-icons/bs";

function CombineHeaders(props) {
  const color = useSelector((state) => state.color);

  return (
    <div className="  ">
      <h1 className="headerBig">{props.text}</h1>
      <TextBorder color={  color.color }  />
      </div>
  )
}
export default CombineHeaders