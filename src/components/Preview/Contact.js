import React from "react";
import PhoneIcon from '../../assets/img/icon-phone.svg';
import MailIcon from '../../assets/img/icon-mail.svg';
import WebIcon from '../../assets/img/icon-web.svg';

const Contact = props => {
    return (
        <div id="preview-contact">
            <span className="preview-card-title">CONTACT</span>
            
            <div className="preview-card">
                <div className="preview-card-slide">
                    <img src={PhoneIcon} />
                    <div className="preview-card-slide-vertical">
                        <span>Phone</span>
                        <span id="preview-contact-phone" className="preview-text">{props.data["info-phone"]}</span>
                    </div>
                </div>
                
                <div className="preview-card-slide">
                    <img src={MailIcon} />
                    <div className="preview-card-slide-vertical">
                        <span>Mail</span>
                        <span id="preview-contact-mail" className="preview-text">{props.data['info-mail']}</span>
                    </div>
                </div>
                
                <div className="preview-card-slide">
                    <img src={WebIcon} />
                    <div className="preview-card-slide-vertical">
                        <span>Web</span>
                        <span id="preview-contact-web" className="preview-text">{props.data['info-web']}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;