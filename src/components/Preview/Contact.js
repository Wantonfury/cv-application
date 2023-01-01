import React from "react";
import PhoneIcon from '../../assets/img/icon-phone.svg';
import MailIcon from '../../assets/img/icon-mail.svg';
import WebIcon from '../../assets/img/icon-web.svg';

class Contact extends React.Component {
    render() {
        return (
            <div id="preview-contact">
                <span className="preview-title">Contact</span>
                
                <div className="preview-wrapper">
                    <div className="preview-details-wrapper">
                        <img src={PhoneIcon} />
                        <div className="preview-details">
                            <span>Phone</span>
                            <span id="preview-contact-phone">07754209123</span>
                        </div>
                    </div>
                    
                    <div className="preview-details-wrapper">
                        <img src={MailIcon} />
                        <div className="preview-details">
                            <span>Mail</span>
                            <span id="preview-contact-mail">person@provider.com</span>
                        </div>
                    </div>
                    
                    <div className="preview-details-wrapper">
                        <img src={WebIcon} />
                        <div className="preview-details">
                            <span>Web</span>
                            <span id="preview-contact-web">www.github.com/person</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;