import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import {Input, SearchBtn} from "../components/Form";
import API from "../utilities/API"

class Search extends Component{
    state = {
        result: {},
        searchTerm:"",
    };

    searchBook = query => {
        API.search(query).then(res => this.setState({result: res.data}))
        .catch(err => console.log(err));
        console.log(this.state.result);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.searchTerm);
        
    }

    

    render(){
        return(
            <Container>
                <Row>
                    <Col size="md-12">
                        <Input 
                        value={this.state.searchterm}
                        onChange={this.handleInputChange}
                        name="searchTerm"
                        placeholders="Enter Book"
                        > 
                        </Input>
                        <SearchBtn 
                        handleFormSubmit={this.handleFormSubmit}
                        >
                            Submit
                        </SearchBtn>
                        
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;