import "../../css/home.css";
import "../../css/App.css";



function HeadersT(props) {
  return (

<div className="flexcol center">     
    <h1 className="headerBig">{props.header} <span style={{color:props.color}} >{props.hightlight}</span> </h1>   
    <p className="peregraph">{props.text}</p>
    
    </div>

  );
}

export default HeadersT;
