import React from "react";
import CodingClub from "../pages/Images/codingclubIITG.png";
import Njack from "../pages/Images/njackIITP.jpg";
function Collab() {
  return (
    <>
      <section className="third-section">
        <h3 className="heading3">This time we are together</h3>
        <div className="logo-conduct">
         <img src={Njack} alt="NJACK_IITP" className="logo2" /> 
          <span>+</span>
          <img src={CodingClub} alt="IITG_Codingclub" className="logo1" />
        </div>
      </section>
    </>
  );
}
export default Collab;
