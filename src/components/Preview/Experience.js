import React from "react";
import uniqid from "uniqid";

class Experience extends React.Component {
    renderExperience(exp) {
        return (
            <li key={uniqid()} className="preview-wrapper">
                <span className="preview-dates">
                    {exp.get("experience-date-from")} - {exp.get("experience-date-to")}
                </span>
                
                <div className="preview-info">
                    <span style={{fontWeight: 700}}>{exp.get("experience-company")} | {exp.get("experience-title")}</span>
                    <span className="preview-category-description">{exp.get("experience-description")}</span>
                </div>
            </li>
        );
    }
    
    render() {
        const { exp } = this.props.data || new Map();
        
        if (!exp) return;
        return (
            <div className="preview-category">
                <h4 className="preview-title">EXPERIENCE</h4>
                <ul className="preview-list">
                    {[...exp.values()].map((value) => {
                        return this.renderExperience(value);
                    })}
                </ul>
            </div>
        );
    }
}

export default Experience;