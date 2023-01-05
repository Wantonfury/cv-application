import React from "react";
import uniqid from "uniqid";

const Experience = props => {
    const exp = new Map();
    
    const onExperienceChange = (e) => {
        this.exp.set(e.currentTarget.id, e.currentTarget.value);
        this.props.onValueChange(this.props.expKey, this.exp);
    }
    
    return (
        <div className="editor-card">
            <div className="editor-title-wrapper">
                <h2 className="editor-title">Experience</h2>
                <button className="editor-button" onClick={(e) => props.deleteExperience(props.expKey)}>Delete</button>
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="experience-title">Title:</label>
                <input type="text" id="experience-title" onInput={onExperienceChange} />
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="experience-company">Company:</label>
                <input type="text" id="experience-company" onInput={onExperienceChange} />
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="experience-description">Description:</label>
                <textarea id="experience-description" onInput={onExperienceChange} />
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="experience-date-from">From:</label>
                <input type="date" id="experience-date-from" onInput={onExperienceChange} />
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="experience-date-to">To:</label>
                <input type="date" id="experience-date-to" onInput={onExperienceChange} />
            </div>
        </div>
    );
}

export default Experience;