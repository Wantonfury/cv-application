import React from "react";
import './Editor.css';
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

class Editor extends React.Component {
    constructor(props) {
        super(props);
        
        this.exp = new Map();
        
        let state = {};
        this.state = { expCount: 1 };
        
        
        this.onValueChange = this.onValueChange.bind(this);
        this.onExperienceChange = this.onExperienceChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
    }
    
    onValueChange(id, value) {
        this.props.onValueChange(id, value);
    }
    
    onExperienceChange(id, value) {
        this.exp.set(id, value);
        this.onValueChange('exp', this.exp);
    }
    
    addExperience() {
        this.setState({
            expCount: this.state.expCount + 1
        });
    }
    
    render() {
        return (
            <div id="editor">
                <PersonalInfo onValueChange={this.onValueChange} />
                <>
                    {[...Array(this.state.expCount)].map((v, i) => <Experience key={i} onValueChange={this.onExperienceChange} />)}
                    <button className="editor-add-experience" onClick={this.addExperience}>Add Experience</button>
                </>
                <Education />
                <Skills />
            </div>
        );
    }
}

export default Editor;