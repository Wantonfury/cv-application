import React from "react";
import ProfileIcon from "../../assets/img/icon-profile.svg";

const Profile = props => {
    if (props.data['info-pfp']) {
        let reader = new FileReader();
        
        reader.onload = function(e) {
            const pfp = document.querySelector('#profile-picture');
            pfp.src = e.target.result;
        }
        reader.readAsDataURL(props.data['info-pfp']);
    }
    
    return (
        <img src={ProfileIcon} alt="Profile Picture" id="profile-picture" />
    );
}

export default Profile;