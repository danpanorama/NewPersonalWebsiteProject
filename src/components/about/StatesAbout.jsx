import "../../css/home.css";
import "../../css/App.css";


import {  useSelector } from "react-redux";
import Button from "../buttons/Button";


import PDF from '../../image/GOOD_CV.pdf'




function StatesAbout() {
  const color = useSelector((state) => state.color);


  let statesArray = [{name:'HTML',class:'html',percent:99}
,{name:'CSS',class:'css',percent:93}
,{name:'JavaScript',class:'javascript',percent:95}
,{name:'React',class:'react',percent:85}
,{name:'Node js',class:'node',percent:70}
,{name:'MySQL',class:'sql',percent:80}
,{name:'MongoDB',class:'mongodb',percent:80}
,{name:'Docker',class:'docker',percent:60}
,{name:'Java',class:'java',percent:50}
,{name:'Python',class:'python',percent:50}
]

  return (
  
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
                {statesArray.map((e)=>{
                    return(
                        <div className="flexcol w100 ">
                       <div className="flexrow between w100"> 
                        <p className="skill">{e.name}</p> 
                        <p className="percent">{e.percent}%</p>
                       </div>
                        <div className={"madall "}>
                          <div style={{ backgroundColor: color.color,width:e.percent+"%" }}className={"mad "+ e.class}></div>
                        </div>
                      </div> 
                    )
                })}
           
           
           
            </div>
          </div>
          <div className="buttonsAbout ">
                     <a class="btn line-btn-dark btn-icon btn-radius" href={PDF} title="" download>
   <Button
              text="  dawonload resume"
              class="resumeBTN"
            >
            
            </Button>
            </a>
            <br /><br />
            <Button
              text="hier me"
              class="resumeBTN"
            >
          
            </Button>
            
           
          </div>
        </div>
  
  );
}

export default StatesAbout;
