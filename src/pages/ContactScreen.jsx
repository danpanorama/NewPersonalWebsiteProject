import {  useSelector } from "react-redux";
import "../css/home.css";
import "../css/App.css";
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

import Img from "../image/j.png";
import AboutSection from "../components/about/AboutSection";
import ConactComp from "../components/contact/ConactComp";
import TextBorder from "../components/text/TextBorder";
import ContactForm from "../components/contact/ContactForm";
import HeadersT from "./../components/text/HeadersT";
import { useEffect } from "react";
import ContacktFix from "../components/contact/ContacktFix";

function ContactScreen() {
  const color = useSelector((state) => state.color);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const AnimationBatchmethod = batch(Sticky(), Fade(), MoveOut(0, -200));
  const AnimationBatchPage2 = batch(FadeIn(), StickyIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());
  return (
    <motion.div
      className="bcbr paddingHome flexcol   "
      initial={{ width: 0 }}
      animate={{ width: "80%", paddingTop: "100px",paddingLeft: "20px", animationDuration: "2s" }}
      exit={{ position: "absolute", top: 0, left: 0 }}
>
      <ContacktFix/>
   
    </motion.div>
  );
}

export default ContactScreen;
