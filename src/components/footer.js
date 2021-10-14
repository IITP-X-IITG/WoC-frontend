import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../pages/Images/phone.png'
import location from '../pages/Images/location.png'
import git from '../pages/Images/GitHub-Mark.png'
import twitter from '../pages/Images/twitter.png'
import mail from '../pages/Images/mail.png'
import footer_style from './footer.css'
export default function footer() {
    return (
        <div className="footer" style={footer_style}>
            <div className="foot">
                <div className="ql">
                    <h1>Quick Links</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Help</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h1>Contact Us</h1>
                    
                    <div className="ico">    
                        <img src={phone} alt="" srcset="" />
                        <p>7007222155</p>
                    </div>
                    <div className="ico">    
                        <img src={mail} alt="" srcset="" />
                        <p><a href="mailto:njack@iitp.ac.in">njack@iitp.ac.in</a></p>
                    </div>
                    <div className="ico">    
                        <img src={location} alt="" srcset="" />
                        <p>IIT Patna</p>
                    </div>
                    <div className="icon_box">
                        <a href="/"><img src={git} alt="" srcset="" /></a>
                        <a href="mailto:njack.iitp@gmail.com"><img src={mail} alt="" srcset="" /></a>
                        <a href="/"><img src={twitter} alt="" srcset="" /></a>
                    </div>
                    
                </div>
            </div>
            <div className="copy">
                &copy; 2021 CODEPEAK            
            </div>
        </div>
    )
}
