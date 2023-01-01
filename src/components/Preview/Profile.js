import React from "react";
import ProfileIcon from "../../assets/img/icon-profile.svg";

class Profile extends React.Component {
    render() {
        return (
            <img src={ProfileIcon} alt="Profile Picture" id="profile-picture" />
        );
    }
}

export default Profile;