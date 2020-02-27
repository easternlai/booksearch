import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import {Input, SearchBtn} from "../components/Form";
import API from "../utilities/API"
import Card from "../components/Card";

class Search extends Component{
    state = {
        searchResult: [],
        searchTerm:""
    };

    searchBook = query => {
        API.search(query).then(res => {
            var arr = [];
            res.data.items.map(item => arr.push({
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors[0],
                description: item.volumeInfo.description,
                image: item.volumeInfo.imageLinks.thumbnail,
                info: item.volumeInfo.infoLink
            })); 
            this.setState({searchResult: arr});
            console.log(this.state.searchResult);
        })
        .catch(err => console.log(err));

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
                        placeholders="Enter Book"> 
                        </Input>
                        <SearchBtn s
                        handleFormSubmit={this.handleFormSubmit}>
                            Submit
                        </SearchBtn>
                        <p>results</p>
                
                            {this.state.searchResult.map(result => (
                                <Row>
                                    <Card 
                                    title={result.title}
                                    author={result.author}
                                    description={result.description}
                                    image={result.image}
                                    link={result.link}
                                    />
                                </Row>
                            ))}
                    

                        
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Search;