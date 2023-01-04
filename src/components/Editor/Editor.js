import React from "react";
import './Editor.css';
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import uniqid from "uniqid";

class Editor extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            exp: new Map(),
            education: new Map()
        };
        
        this.onValueChange = this.onValueChange.bind(this);
        this.onExperienceChange = this.onExperienceChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        
        this.onEducationChange = this.onEducationChange.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
    }
    
    onValueChange(id, value) {
        this.props.onValueChange(id, value);
    }
    
    onExperienceChange(key, value) {
        let exp = this.state.exp;
        exp.set(key, value);
        
        this.setState({ exp: exp });
        this.onValueChange('exp', this.state.exp);
    }
    
    addExperience() {
        let exp = this.state.exp;
        exp.set(uniqid(), new Map());
        
        this.setState({
            exp: exp
        });
        this.onValueChange('exp', this.state.exp);
    }
    
    deleteExperience(key) {
        let exp = this.state.exp;
        exp.delete(key);
        
        this.setState({
            exp: exp
        });
        this.onValueChange('exp', this.state.exp);
    }
    
    onEducationChange(key, value) {
        let education = this.state.education;
        education.set(key, value);
        
        this.setState({ education: education });
        this.onValueChange('education', this.state.education);
    }
    
    addEducation() {
        let education = this.state.education;
        education.set(uniqid(), new Map());
        
        this.setState({
            education: education
        });
        this.onValueChange('education', this.state.education);
    }
    
    deleteEducation(key) {
        let education = this.state.education;
        education.delete(key);
        
        this.setState({
            education: education
        });
        this.onValueChange('education', this.state.education);
    }
    
    render() {
        return (
            <div id="editor">
                <PersonalInfo onValueChange={this.onValueChange} />
                <>
                    {[...this.state.exp].map(v => <Experience key={v[0]} onValueChange={this.onExperienceChange} expKey={v[0]} deleteExperience={this.deleteExperience} />)}
                    <button className="editor-button" onClick={this.addExperience}>Add Experience</button>
                </>
                <>
                    {[...this.state.education].map(v => <Education key={v[0]} educationKey={v[0]} onValueChange={this.onEducationChange} deleteEducation={this.deleteEducation} />)}
                    <button className="editor-button" onClick={this.addEducation}>Add Education</button>
                </>
                <Skills />
            </div>
        );
    }
}

export default Editor;