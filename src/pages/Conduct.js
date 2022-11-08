import React from "react";
import NavBar from "../components/Navigation";
import Firstsection from "../components/Conduct_First_section";
import Card from "../components/Conduct_Second_section";
import conduct_styles from "./Conduct.css";
import Animatedbg from "../components/Animatedbg";
import Footer from "../components/footer";

function Conduct() {
  return (
    <>
      <div styles={conduct_styles} className="conduct-class">
        <NavBar />
        <Animatedbg />
        <Firstsection />
        <Card />
        <Footer />
      </div>
    </>
  );
}
export default Conduct;
