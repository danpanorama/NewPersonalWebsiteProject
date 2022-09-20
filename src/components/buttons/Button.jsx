import "../../css/home.css";
import "../../css/App.css";
import { useDispatch,useSelector } from "react-redux";



function Button(props) {
    const color = useSelector((state)=> state.color)

  return (
<button className={props.class} style={{backgroundColor:color.color}} >{props.text}</button>
  );
}

export default Button;
