import "../../css/home.css";
import "../../css/App.css";



function TextBorder(props) {
  return (
<div className=" marginbottom">
    <div style={{backgroundColor:props.color}} className="lineOne bacline"></div>
    <div style={{backgroundColor:props.color}} className="linetow bacline"></div>
 
  

</div>
  );
}

export default TextBorder;
