import React from 'react'
import '../pages/Home.css'

export default function timeline_block(props) {
    
    return (
        <div>
            <a href="/" className="timeline-content">
                <span className="timeline-year">{props.date}</span>
                <div className="timeline-icon">
                <i className="fa fa-apple" aria-hidden="true"></i>
                </div>
                <div className="content">
                {/* <h3 className="title">{props.title}</h3> */}
                <p className="description">
                {props.desc}
                </p>
                </div>
            </a>
        </div>
    )
}
