import React from "react";
import '../css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <h4>CV Maker</h4>
                <span>Make and edit your CV!</span>
            </div>
        );
    }
}

export default Header;