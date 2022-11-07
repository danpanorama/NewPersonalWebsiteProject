import "../../css/home.css";
import "../../css/App.css";
import "../../css/contact.css";
import Button from "../buttons/Button";






function ContactForm(props) {
  return (
<div className="contactformdiv paddleft">

 <form action="flexcol  formcontacttt ">
    <div className="flexrow w100 between">
        <input type="text" className="input" />  <input type="text" className="input" />
    </div>
    <div className="subject">
    <input type="text" className="inputsubject" />
    </div>

    <div className="teacteare ">
        <textarea className="textArea" name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div className="button">
       <Button class={"primeryBTN"} text={"send"} />
    </div>

 </form>

  

</div>
  );
}

export default ContactForm;
