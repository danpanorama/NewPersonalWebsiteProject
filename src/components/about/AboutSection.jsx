import "../../css/home.css";
import "../../css/App.css";
import TextBorder from "../text/TextBorder";

import { useDispatch, useSelector } from "react-redux";

function AboutSection() {
  const color = useSelector((state) => state.color);

  return (
    <div className="h100vh about ">
      <h1 className="headerBig">about me</h1>
      <TextBorder color={  color.color } />
      <div className="box">
        <div className="headers">
          <h1 className="headerBig" >i'm daniel Morcos and  <span  style={{ color: color.color }} >Web Developer</span> </h1>
          <p className="peregraph">
            g dfsgf gfh dhgfh gfhg fhgfh gfh ghgf hgfhgfh gfhgf g dfsgf gfh
            dhgfh gfhg fhgfh gfh ghgf hgfhgfh gfhgf g dfsgf gfh dhgfh gfhg fhgfh
            gfh ghgf hgfhgfh gfhgf g dfsgf gfh dhgfh gfhg fhgfh gfh ghgf hgfhgfh
            gfhgf g dfsgf gfh dhgfh gfhg fhgfh gfh ghgf hgfhgfh gfhgf g dfsgf
            gfh dhgfh gfhg fhgfh gfh ghgf hgfhgfh gfhgf
          </p>
        </div>

        <div className="grid">
          <div className="listInfo g1-2">
            <p className="text">birthDay: 1.11.90</p>
            <p className="text">Degree: Diploma</p>
            <p className="text">phone: 0534273529</p>
            <p className="text">city: Tel-Aviv</p>
          </div>
          <div className="listInfo g2-3">
            <p className="text">email: dani3morcos@gmail.com</p>
            <p className="text">Linkdin: daniSSH.com</p>
            <p className="text">github: www.githb/danpanorama.com</p>
            <p className="text">Freelance: Available</p>
          </div>
          <div className="skills g3-4-1-3">
            <div className="skillstab flexcol ">
            <div className="flexrow w100 alighn">
              <p className="skill">HTML</p>
              <div style={{ backgroundColor: color.color }}className="mad html"></div>
            </div>

            <div className="flexrow w100 alighn">
              <p className="skill">CSS</p>
              <div style={{ backgroundColor: color.color }}className="mad css"></div>
            </div>
            <div className="flexrow w100 alighn">
              <p className="skill">JavaScript</p>
              <div style={{ backgroundColor: color.color }}className="mad javascript"></div>
            </div>
            <div className="flexrow w100 alighn">
              <p className="skill">React js</p>
              <div style={{ backgroundColor: color.color }}className="mad react"></div>
            </div>
            <div className="flexrow w100 alighn">
              <p className="skill">Node js</p>
              <div style={{ backgroundColor: color.color }}className="mad node"></div>
            </div>
            <div className="flexrow w100 alighn">
              <p className="skill">mySQL</p>
              <div style={{ backgroundColor: color.color }}className="mad sql"></div>
            </div>
            <div className="flexrow w100 alighn">
              <p className="skill">mongoDB</p>
              <div style={{ backgroundColor: color.color }}className="mad mongodb"></div>
            </div>
            <div className="flexrow w100 alighn">
              <p className="skill">Docker</p>
              <div style={{ backgroundColor: color.color }}className="mad docker"></div>
            </div>
            <div className="flexrow w100 alighn">
              <p className="skill">Java</p>
              <div style={{ backgroundColor: color.color }}className="mad java"></div>
            </div>
            <div className="flexrow w100 alighn">
              <p className="skill">Python</p>
              <div  style={{ backgroundColor: color.color }}className="mad python"></div>
            </div>

            </div>
          </div>
          <div className="buttonsAbout ">
            <button
              style={{ backgroundColor: color.color }}
              className="resumeBTN"
            >
              dawonload resume
            </button>
            <br /><br />
            <button
              style={{ backgroundColor: color.color }}
              className="resumeBTN"
            >
              hier me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
