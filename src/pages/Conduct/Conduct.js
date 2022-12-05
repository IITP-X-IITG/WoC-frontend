import React from "react";
import NavBar from "../../components/Navigation";
import FirstSection from "../../components/Register/RegisterFirstSection";
import Card from "../../components/Register/RegisterSecondSection";
import conduct_styles from "./Conduct.css";
import AnimatedBG from "../../components/Animatedbg";
import Footer from "../../components/footer";

function Conduct() {
  return (
    <>
      <div styles={conduct_styles} className="conduct-class">
        <NavBar />
        <AnimatedBG />
        <FirstSection />
        <Card />
        <Footer />
      </div>
    </>
  );
}
export default Conduct;
