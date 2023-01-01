import React from "react";

class Experience extends React.Component {
    render() {
        return (
            <div id="experience" className="editor-card">
                <h2 className="editor-title">Experience</h2>
                
                <div className="editor-wrapper">
                    <label htmlFor="experience-title">Title:</label>
                    <input type="text" id="experience-title" />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="experience-company">Company:</label>
                    <input type="text" id="experience-company" />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="experience-date-from">From:</label>
                    <input type="date" id="experience-date-from" />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="experience-date-to">To:</label>
                    <input type="date" id="experience-date-to" />
                </div>
            </div>
        );
    }
}

export default Experience;