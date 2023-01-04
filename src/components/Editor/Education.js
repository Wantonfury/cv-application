import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props);
        
        this.education = new Map();
        this.education.set('educationKey', props.educationKey);
        
        this.onEducationChange = this.onEducationChange.bind(this);
    }
    
    onEducationChange(e) {
        this.education.set(e.currentTarget.id, e.currentTarget.value);
        this.props.onValueChange(this.props.educationKey, this.education);
    }
    
    render() {
        return (
            <div className="editor-card">
                <div className="editor-title-wrapper">
                    <h2 className="editor-title">Education</h2>
                    <button className="editor-button" onClick={() => this.props.deleteEducation(this.props.educationKey)}>Delete</button>
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="education-school">School:</label>
                    <input type="text" id="education-school" onInput={this.onEducationChange} />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="education-description">Description:</label>
                    <textarea id="education-description" onInput={this.onEducationChange} />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="education-date-from">From:</label>
                    <input type="date" id="education-date-from" onInput={this.onEducationChange} />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="education-date-to">To:</label>
                    <input type="date" id="education-date-to" onInput={this.onEducationChange} />
                </div>
            </div>
        );
    }
}

export default Education;