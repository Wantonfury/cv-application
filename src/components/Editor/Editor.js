import React from "react";
import './Editor.css';
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

class Editor extends React.Component {
    constructor(props) {
        super(props);
        
        this.exp = {};
        this.onValueChange = this.onValueChange.bind(this);
        this.onExperienceChange = this.onExperienceChange.bind(this);
    }
    
    onValueChange(id, value) {
        this.props.onValueChange(id, value);
    }
    
    onExperienceChange(id, value) {
        this.exp[id] = value;
        this.onValueChange('exp', this.exp);
    }
    
    render() {
        return (
            <div id="editor">
                <PersonalInfo onValueChange={this.onValueChange} />
                <Experience onValueChange={this.onExperienceChange} />
                <Education />
                <Skills />
            </div>
        );
    }
}

export default Editor;