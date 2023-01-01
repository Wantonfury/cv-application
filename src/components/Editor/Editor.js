import React from "react";
import './Editor.css';
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

class Editor extends React.Component {
    
    render() {
        return (
            <div id="editor">
                <div id="editor-info">
                    <PersonalInfo />
                    <Experience />
                    <Education />
                    <Skills />
                </div>
            </div>
        );
    }
}

export default Editor;