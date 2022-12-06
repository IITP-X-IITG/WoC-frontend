import React from "react";
import AnimatedBG from "../components/Animatedbg";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import Points from "./points/Points.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function PointsMain(props) {
  const { id } = props.match.params;
  return (
    <>
      <AnimatedBG />
      <Navigation />
      <Points id={id} />
      <Footer />
    </>
  );
}
export default PointsMain;
