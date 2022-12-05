import React from "react";
import Navigation from "../components/Navigation";
import AnimatedBG from "../components/Animatedbg";
import Footer from "../components/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Advisory from "../components/Team/Advisory";
import Coordinators from "../components/Team/Coordinators";
import Tech from "../components/Team/Tech";
import Sponsorship from "../components/Team/Sponsorship";

export default function Team() {
  React.useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div>
      <AnimatedBG />
      <Navigation />
      <div className="slider">
        <h2 data-aos="zoom-in" data-aos-once="true">
          TEAM
        </h2>
        <hr />
      </div>
      <div className="combined">
        <Advisory />
        <Coordinators />
        <Tech />
        <Sponsorship />
      </div>
      <Footer />
    </div>
  );
}
