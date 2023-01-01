import React from "react";
import './Preview.css';
import Profile from './Profile.js';
import Contact from './Contact.js';
import Skills from './Skills.js';
import Details from './Details.js';
import Experience from './Experience.js';
import Education from './Education.js';


class Preview extends React.Component {
    
    render() {
        return (
            <div id="preview">
                <div id="preview-left">
                    <Profile />
                    <Contact />
                    <Skills />
                </div>
                
                <div id="preview-right">
                    <Details />
                    <Experience />
                    <Education />
                </div>
            </div>
        );
    }
}

export default Preview;