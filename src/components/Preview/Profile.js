import React from "react";
import ProfileIcon from "../../assets/img/icon-profile.svg";

class Profile extends React.Component {
    render() {
        if (this.props.data['info-pfp']) {
            let reader = new FileReader();
            
            reader.onload = function(e) {
                const pfp = document.querySelector('#profile-picture');
                pfp.src = e.target.result;
            }
            reader.readAsDataURL(this.props.data['info-pfp']);
        }
        
        return (
            <img src={ProfileIcon} alt="Profile Picture" id="profile-picture" />
        );
    }
}

export default Profile;