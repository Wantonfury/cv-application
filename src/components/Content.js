import React from "react";
import Editor from "./Editor/Editor";
import Preview from "./Preview/Preview";
import '../css/Content.css';

class Content extends React.Component {
    render() {
        return (
            <div id="content">
                <Editor />
                <Preview />
            </div>
        );
    }
}

export default Content;