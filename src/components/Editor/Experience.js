import React from "react";
import uniqid from "uniqid";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        
        this.exp = {};
        this.uniqueID = uniqid();
        
        this.onExperienceChange = this.onExperienceChange.bind(this);
    }
    
    onExperienceChange(e) {
        this.exp[e.currentTarget.id] = e.currentTarget.value;
        this.props.onValueChange(e.currentTarget.parentElement.parentElement.id, this.exp);
    }
    
    render() {
        return (
            <div id={this.uniqueID} className="editor-card">
                <h2 className="editor-title">Experience</h2>
                
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