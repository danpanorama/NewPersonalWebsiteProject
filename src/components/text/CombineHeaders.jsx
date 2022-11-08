import "../../css/home.css";
import "../../css/App.css";
import TextBorder from "../text/TextBorder";

import { useSelector } from "react-redux";


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