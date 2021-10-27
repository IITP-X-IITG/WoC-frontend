import React from 'react'
import { Link } from 'react-router-dom'
import {FiSmartphone} from 'react-icons/fi'
import {AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsFacebook} from 'react-icons/bs'
import { VscGithubInverted } from "react-icons/vsc";
import footer_style from './footer.css'
import nwocLogo from '../pages/Images/nwocLogo.svg'
import guwLogo from '../pages/Images/codingclubIITG.png'
export default function footer(props) {
    return (
        <div className="footer" style={footer_style} >
            <div className="foot" style={{ backgroundColor: props.bg ?? ""}}>
                <div className="together">
                    <h1>This time we are together...</h1>
                    <div className="togetherLogo">
                        <img src={nwocLogo} alt="" srcset="" />
                        <p>+</p>
                        <img src={guwLogo} alt="" srcset="" />
                    </div>
                </div>
                <div className="ql">
                    <h1>Quick Links</h1>
                    <hr className="hiddenHr" />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/project">Projects</Link></li>
                        <li><Link to="/conduct">Conduct</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h1>Contact Us</h1>
                    <hr className="hiddenHr" />
                    <div className="ico">    
                        <FiSmartphone/>
                        <p>7007222155</p>
                    </div>
                    <div className="ico">    
                        <AiOutlineMail/>
                        <p><a href="mailto:njack@iitp.ac.in">njack@iitp.ac.in</a></p>
                    </div>
                    <div className="ico">
                        <AiOutlineMail/>
                        <p><a href="mailto:codingclubiitg@gmail.com">codingclubiitg@gmail.com</a></p>
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
