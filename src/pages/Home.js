import React from 'react'
import Navigation from '../components/Navigation'
import home_style from './Home.css'
import logo_codepeak from './Images/logocodepeak_rb.png'
import hill from './Images/websvgmt.svg'
//import logo_codepeak from './Images/LOGOCODEPEAK.png'

export default function Home() {
    return (
        <div style={home_style}>
            <Navigation/>
            <div class='stars'></div>
            <div class='twinkling'></div>
            {/* <div class='clouds'></div> */}
            <div className="logo">
                <img src={logo_codepeak} alt="" srcset="" className="logo_img"/>
                <img src={hill} alt="" srcset="" className="hill_img"/>
            </div>
            <div className="tst" style={{height:'1000px'}}> 
            </div>
            
        </div>
    )
}
