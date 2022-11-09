import React from "react";
import Animatedbg from "../components/Animatedbg";
import Navigation from "../components/Navigation";
import Footer from '../components/footer';
import Points from './points/Points.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

function Pointstemp(props){
    const {id} = props.match.params
    return<> 
     <Animatedbg />
     <Navigation />
     
    {/* <div style={{display:"flex",alignItems:'center', justifyContent:'center', width:"100vw",height:"100vh"}}><h2 style={{color:"white",fontSize:"50px"}}>Coming Soon</h2>   
    </div> */}
    <Points id={id} />
    <Footer/>
     </>;
  
}
export default Pointstemp;