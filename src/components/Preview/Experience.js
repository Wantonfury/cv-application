import React from "react";
import uniqid from "uniqid";

class Experience extends React.Component {
    renderExperience(exp) {
        return (
            <li key={uniqid()} className="preview-experience-wrapper">
                <span className="preview-experience-dates">
                    {exp["experience-date-from"]} - {exp["experience-date-to"]}
                </span>
                
                <div className="preview-experience-info">
                    <span style={{fontWeight: 700}}>{exp["experience-company"]} | {exp["experience-title"]}</span>
                    <span className="preview-experience-description">{exp["experience-description"]}</span>
                </div>
            </li>
        );
    }
    
    render() {
        const { exp } = this.props.data || new Map();
        
        if (!exp) return;
        return (
            <div className="preview-experience">
                <h4 className="preview-title">EXPERIENCE</h4>
                <ul className="preview-experience-list">
                    {[...exp.values()].map((value) => {
                        return this.renderExperience(value);
                    })}
                </ul>
            </div>
        );
    }
}

export default Experience;