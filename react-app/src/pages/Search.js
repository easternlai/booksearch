import React, {Component} from "react";

class Search extends Component{
    state = {
        test: "test"
    }
    render(){
        return(
            <p>{this.state.test}</p>
        );
    }
}

export default Search;