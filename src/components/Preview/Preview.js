import React from "react";
import './Preview.css';
import Profile from './Profile.js';
import Contact from './Contact.js';
import Skills from './Skills.js';
import Details from './Details.js';
import Experience from './Experience.js';
import Education from './Education.js';


const Preview = props => {
    return (
        <div id="preview">
            <div id="preview-left">
                <Profile data={props.data} />
                <Contact data={props.data} />
                <Skills data={props.data} />
            </div>
            
            <div id="preview-right">
                <Details data={props.data} />
                <Experience data={props.data} />
                <Education data={props.data} />
            </div>
        </div>
    );
}

export default Preview;