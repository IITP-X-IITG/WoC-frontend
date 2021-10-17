import React from 'react'
import { Link } from 'react-router-dom'
import {FiSmartphone} from 'react-icons/fi'
import {AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsFacebook} from 'react-icons/bs'
import location from '../pages/Images/location.png'

import { VscGithubInverted } from "react-icons/vsc";
import twitter from '../pages/Images/twitter.png'
import mail from '../pages/Images/mail.png'
import footer_style from './footer.css'
import fb from '../pages/Images/fb.png'
export default function footer(props) {
    return (
        <div className="footer" style={footer_style} >
            <div className="foot" style={{ backgroundColor: props.bg ?? ""}}>
                <div className="ql">
                    <h1>Quick Links</h1>
                    <hr/>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Help</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h1>Contact Us</h1>
                    <hr/>
                    <div className="ico">    
                        <FiSmartphone/>
                        <p>7007222155</p>
                    </div>
                    <div className="ico">    
                        <AiOutlineMail/>
                        <p><a href="mailto:njack@iitp.ac.in">njack@iitp.ac.in</a></p>
                    </div>
                    <div className="ico">    
                        <GoLocation/>
                        <p>IIT Patna</p>
                    </div>
                    <div className="icon_box">
                        <a href="https://github.com/Njack-IITP/" target="_blank" rel="noreferrer"><VscGithubInverted/></a>
                        <a href="mailto:njack.iitp@gmail.com" target="_blank" rel="noreferrer"><AiOutlineMail/></a>
                        <a href="https://twitter.com/njackiitp" target="_blank" rel="noreferrer"><AiFillTwitterCircle/></a>
                        <a href="https://www.facebook.com/njack.iitp/" target="_blank" rel="noreferrer"><BsFacebook/></a>
                        
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}
