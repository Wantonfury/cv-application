import React from "react";

const PersonalInfo = props => {
    const onValueChange = (e) => {
        props.onValueChange(e.currentTarget.id, e.currentTarget.value);
    }
    
    return (
        <div id="editor-info" className="editor-card">
            <h2 className="editor-title">Personal Information</h2>
            
            <div className="editor-wrapper">
                <label htmlFor="info-firstname">First name:</label>
                <input type="text" id="info-firstname" onInput={onValueChange} />
            </div>
                
            <div className="editor-wrapper">
                <label htmlFor="info-lastname">Last name:</label>
                <input type="text" id="info-lastname" onInput={onValueChange} />
            </div>
                
            <div className="editor-wrapper">
                <label htmlFor="info-phone">Phone:</label>
                <input type="tel" title="test" id="info-phone" onInput={onValueChange} />
            </div>
                
            <div className="editor-wrapper">
                <label htmlFor="info-mail">Email:</label>
                <input type="text" id="info-mail" onInput={onValueChange} />
            </div>
                
            <div className="editor-wrapper">
                <label htmlFor="info-web">Website:</label>
                <input type="text" id="info-web" onInput={onValueChange} />
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="info-pfp">Profile Picture:</label>
                <input type="file" id="info-pfp" accept="image/*" onChange={(e) => props.onValueChange('info-pfp', e.target.files[0])} />
            </div>
            
            <div className="editor-wrapper">
                <label htmlFor="info-description">Description:</label>
                <textarea id="info-description" rows="5" onInput={onValueChange} />
            </div>
        </div>
    );
}

export default PersonalInfo;