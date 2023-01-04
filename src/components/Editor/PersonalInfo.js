import React from "react";

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        
        this.onValueChange = this.onValueChange.bind(this);
    }
    
    onValueChange(e) {
        this.props.onValueChange(e.currentTarget.id, e.currentTarget.value);
    }
    
    render() {
        return (
            <div id="editor-info" className="editor-card">
                <h2 className="editor-title">Personal Information</h2>
                
                <div className="editor-wrapper">
                    <label htmlFor="info-firstname">First name:</label>
                    <input type="text" id="info-firstname" onInput={this.onValueChange} />
                </div>
                    
                <div className="editor-wrapper">
                    <label htmlFor="info-lastname">Last name:</label>
                    <input type="text" id="info-lastname" onInput={this.onValueChange} />
                </div>
                    
                <div className="editor-wrapper">
                    <label htmlFor="info-phone">Phone:</label>
                    <input type="tel" title="test" id="info-phone" onInput={this.onValueChange} />
                </div>
                    
                <div className="editor-wrapper">
                    <label htmlFor="info-mail">Email:</label>
                    <input type="text" id="info-mail" onInput={this.onValueChange} />
                </div>
                    
                <div className="editor-wrapper">
                    <label htmlFor="info-web">Website:</label>
                    <input type="text" id="info-web" onInput={this.onValueChange} />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="info-pfp">Profile Picture:</label>
                    <input type="file" id="info-pfp" accept="image/*" onChange={(e) => this.props.onValueChange('info-pfp', e.target.files[0])} />
                </div>
                
                <div className="editor-wrapper">
                    <label htmlFor="info-description">Description:</label>
                    <textarea id="info-description" rows="5" onInput={this.onValueChange} />
                </div>
            </div>
        );
    }
}

export default PersonalInfo;