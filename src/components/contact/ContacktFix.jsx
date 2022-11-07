import { useDispatch, useSelector } from "react-redux";
import "../../css/home.css";
import "../../css/App.css";
import { motion } from "framer-motion";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Move,
  batch,
  Sticky,
  MoveOut,
  Fade,
  StickyIn,
  FadeIn,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

import ConactComp from "../../components/contact/ConactComp";
import TextBorder from "../../components/text/TextBorder";
import ContactForm from "../../components/contact/ContactForm";
import HeadersT from "../../components/text/HeadersT";
import { useEffect } from "react";

function ContacktFix() {
  const color = useSelector((state) => state.color);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const AnimationBatchmethod = batch(Sticky(), Fade(), MoveOut(0, -200));
  const AnimationBatchPage2 = batch(FadeIn(), StickyIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());
  return (

       <div>
           <h1 className="headerBig">contact me</h1>
          <TextBorder text={"contact"} color={color.color} />

          <ConactComp color={color.color} />

          <div className="margintop flexcol center">
            <HeadersT
              text={"send me now"}
              color={color.color}
              header="whant to contact me "
              hightlight={"send email "}
            />

            <ContactForm />
          </div>
       </div>

  );
}

export default ContacktFix;
