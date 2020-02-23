import React, {Component} from "react";

class Save extends Component{
    state = {
        test: "test"
    }
    render(){
        return(
            <p>{this.state.test}</p>
        );
    }
}

export default Save;