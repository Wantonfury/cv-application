import React from "react";
import './Editor.css';
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

class Editor extends React.Component {
    constructor(props) {
        super(props);
        
        this.onValueChange = this.onValueChange.bind(this);
    }
    
    onValueChange(id, value) {
        this.props.onValueChange(id, value);
    }
    
    render() {
        return (
            <div id="editor">
                <PersonalInfo onValueChange={this.onValueChange} />
                <Experience onValueChange={this.onValueChange} />
                <Education />
                <Skills />
            </div>
        );
    }
}

export default Editor;