import React from "react";

class PersonalInfo extends React.Component {
    render() {
        return (
            <div id="editor-info" className="editor-card">
                <h2 className="editor-title">Personal Information</h2>
                
                <div className="editor-wrapper">
                    <label htmlFor="info-firstname">First name:</label>
                    <input type="text" id="info-firstname" />
                </div>
                    
                <div className="editor-wrapper">
                    <label htmlFor="info-lastname">Last name:</label>
                    <input type="text" id="info-lastname" />
                </div>
                    
                <div className="editor-wrapper">
                    <label htmlFor="info-phone">Phone:</label>
                    <input type="text" id="info-phone" />
                </div>
                    
                <div className="editor-wrapper">
                    <label htmlFor="info-mail">Email:</label>
                    <input type="text" id="info-mail" />
                </div>
                    
                <div className="editor-wrapper">
                    <label htmlFor="info-web">Website:</label>
                    <input type="text" id="info-web" />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="info-description">Description:</label>
                    <textarea id="info-description" rows="5" />
                </div>
            </div>
        );
    }
}

export default PersonalInfo;