import React, { useState } from "react";
import './Editor.css';
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import uniqid from "uniqid";

const Editor = props => {
    const [experience, setExperience] = useState(new Map());
    const [education, setEducation] = useState(new Map());
    
    const onValueChange = (id, value) => {
        this.props.onValueChange(id, value);
    }
    
    const onExperienceChange = (key, value) => {
        let exp = experience;
        exp.set(key, value);
        
        setExperience(exp);
        this.onValueChange('exp', experience);
    }
    
    const addExperience = () => {
        let exp = experience;
        exp.set(uniqid(), new Map());
        
        setExperience(exp);
        this.onValueChange('exp', experience);
    }
    
    const deleteExperience = (key) => {
        let exp = experience;
        exp.delete(key);
        
        setExperience(exp);
        this.onValueChange('exp', experience);
    }
    
    const onEducationChange = (key, value) => {
        let edu = education;
        edu.set(key, value);
        
        setEducation(edu);
        this.onValueChange('education', edu);
    }
    
    const addEducation = () => {
        let edu = education;
        edu.set(uniqid(), new Map());
        
        setEducation(edu);
        this.onValueChange('education', edu);
    }
    
    const deleteEducation = (key) => {
        let edu = education;
        edu.delete(key);
        
        setEducation(edu);
        this.onValueChange('education', edu);
    }
    
    return (
        <div id="editor">
            <PersonalInfo onValueChange={onValueChange} />
            <>
                {[...experience].map(v => <Experience key={v[0]} onValueChange={onExperienceChange} expKey={v[0]} deleteExperience={deleteExperience} />)}
                <button className="editor-button" onClick={addExperience}>Add Experience</button>
            </>
            <>
                {[...education].map(v => <Education key={v[0]} educationKey={v[0]} onValueChange={onEducationChange} deleteEducation={deleteEducation} />)}
                <button className="editor-button" onClick={addEducation}>Add Education</button>
            </>
            <Skills />
        </div>
    );
}

export default Editor;