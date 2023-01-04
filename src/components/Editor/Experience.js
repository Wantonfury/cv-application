import React from "react";
import uniqid from "uniqid";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        
        this.exp = new Map();
        
        this.onExperienceChange = this.onExperienceChange.bind(this);
    }
    
    onExperienceChange(e) {
        this.exp.set(e.currentTarget.id, e.currentTarget.value);
        this.props.onValueChange(this.props.expKey, this.exp);
    }
    
    render() {
        return (
            <div className="editor-card">
                <div className="editor-title-wrapper">
                    <h2 className="editor-title">Experience</h2>
                    <button className="editor-button" onClick={(e) => this.props.deleteExperience(this.props.expKey)}>Delete</button>
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="experience-title">Title:</label>
                    <input type="text" id="experience-title" onInput={this.onExperienceChange} />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="experience-company">Company:</label>
                    <input type="text" id="experience-company" onInput={this.onExperienceChange} />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="experience-description">Description:</label>
                    <textarea id="experience-description" onInput={this.onExperienceChange} />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="experience-date-from">From:</label>
                    <input type="date" id="experience-date-from" onInput={this.onExperienceChange} />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="experience-date-to">To:</label>
                    <input type="date" id="experience-date-to" onInput={this.onExperienceChange} />
                </div>
            </div>
        );
    }
}

export default Experience;