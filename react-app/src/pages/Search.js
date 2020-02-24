import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import {Input, SearchBtn} from "../components/Form";
import API from "../utilities/API"

class Search extends Component{
    state = {
        test: "test",
        searchTerm:"",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        
    };

    handleFormSubmit = event => {
        event.preventDefault();
        
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