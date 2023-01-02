import React from "react";
import Editor from "./Editor/Editor";
import Preview from "./Preview/Preview";
import '../css/Content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);
        
        this.onValueChange = this.onValueChange.bind(this);
        
        this.state = {};
    }
    
    onValueChange(id, value) {
        let state = {};
        state[id] = value;
        
        this.setState(state);
    }
    
    render() {
        return (
            <div id="content">
                <Editor onValueChange={this.onValueChange} />
                <Preview data={this.state} />
            </div>
        );
    }
}

export default Content;