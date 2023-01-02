import React from "react";
import './Preview.css';
import Profile from './Profile.js';
import Contact from './Contact.js';
import Skills from './Skills.js';
import Details from './Details.js';
import Experience from './Experience.js';
import Education from './Education.js';


class Preview extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="preview">
                <div id="preview-left">
                    <Profile data={this.props.data} />
                    <Contact data={this.props.data} />
                    <Skills data={this.props.data} />
                </div>
                
                <div id="preview-right">
                    <Details data={this.props.data} />
                    <Experience data={this.props.data} />
                    <Education data={this.props.data} />
                </div>
            </div>
        );
    }
}

export default Preview;