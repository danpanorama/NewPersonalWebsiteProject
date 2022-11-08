import "../../css/home.css";
import "../../css/App.css";
import "../../css/contact.css";
import HeadersT from "../text/HeadersT";

import {BsFillTelephoneXFill,BsEnvelope,BsGeoAltFill,BsGithub } from "react-icons/bs";



function ConactComp(props) {
  return (
<div className="flexcol center conactcomp">

    <HeadersT text={"i am at your phone"} color={props.color} header="you have any" hightlight={"quastion ?"}/>

    <div className="gridFor">
        <div className="cube flexcol center">
            <p style={{color:props.color}} className="iconcontact "><BsFillTelephoneXFill/></p>
            <p className="headerText">call us on</p>
            <p className="pareText">050138848281</p>
        </div>
        <div className="cube flexcol center">
            <p style={{color:props.color}} className="iconcontact "><BsEnvelope/></p>
            <p className="headerText">call us on</p>
            <p className="pareText">dani3morcos@gmail.com</p>
        </div>  <div className="cube flexcol center">
            <p style={{color:props.color}} className="iconcontact "><BsGithub/></p>
            <p className="headerText">call us on</p>
            <p className="pareText">www.https://github.com</p>
        </div>  <div className="cube flexcol center">
            <p style={{color:props.color}} className="iconcontact "><BsGeoAltFill/></p>
            <p className="headerText">call us on</p>
            <p className="pareText">alber street 56</p>
        </div>  
    </div>
  

</div>
  );
}

export default ConactComp;
