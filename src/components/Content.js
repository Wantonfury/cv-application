import React, { useState } from "react";
import Editor from "./Editor/Editor";
import Preview from "./Preview/Preview";
import '../css/Content.css';

const Content = props => {
    const [state, setState] = useState({});
    
    const onValueChange = (id, value) => {
        let newState = {};
        newState[id] = value;
        
        setState(newState);
    }
    
    return (
        <div id="content">
            <Editor onValueChange={onValueChange} />
            <Preview data={state} />
        </div>
    );
}

export default Content;