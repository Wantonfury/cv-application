import React from "react";

const Education = props => {
    const education = new Map();
    education.set('educationKey', props.educationKey);
    
    const onEducationChange = (e) => {
        education.set(e.currentTarget.id, e.currentTarget.value);
        props.onValueChange(props.educationKey, education);
    }
    
    return (
        <div className="editor-card">
            <div className="editor-title-wrapper">
                <h2 className="editor-title">Education</h2>
                <button className="editor-button" onClick={() => props.deleteEducation(props.educationKey)}>Delete</button>
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="education-school">School:</label>
                <input type="text" id="education-school" onInput={onEducationChange} />
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="education-description">Description:</label>
                <textarea id="education-description" onInput={onEducationChange} />
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="education-date-from">From:</label>
                <input type="date" id="education-date-from" onInput={onEducationChange} />
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="education-date-to">To:</label>
                <input type="date" id="education-date-to" onInput={onEducationChange} />
            </div>
        </div>
    );
}

export default Education;