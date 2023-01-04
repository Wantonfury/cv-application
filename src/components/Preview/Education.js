import React from "react";
import uniqid from "uniqid";

class Education extends React.Component {
    renderEducation(education) {
        return (
            <li key={uniqid()} className="preview-experience-wrapper">
                <span className="preview-experience-dates">
                    {education.get("education-date-from")} - {education.get("education-date-to")}
                </span>
                
                <div className="preview-experience-info">
                    <span style={{fontWeight: 700}}>{education.get("education-school")}</span>
                    <span className="preview-experience-description">{education.get("education-description")}</span>
                </div>
            </li>
        );
    }
    
    render() {
        const { education } = this.props.data || new Map();
        
        if (!education) return;
        return (
            <div className="preview-experience">
                <h4 className="preview-title">EDUCATION</h4>
                <ul className="preview-experience-list">
                    {[...education.values()].map((value) => {
                        return this.renderEducation(value);
                    })}
                </ul>
            </div>
        );
    }
}

export default Education;