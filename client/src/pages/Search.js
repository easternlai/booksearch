import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import {Input, SearchBtn} from "../components/Form";
import API from "../utilities/API"
import Card from "../components/Card";
import { Link } from "react-router-dom";

class Search extends Component{
    state = {
        searchResult: [],
        searchTerm:"",
        saveBook:{}
    };

    searchBook = query => {
        API.search(query).then(res => {
            var arr = [];
            var i = 0;
            res.data.items.map(item => arr.push({
                id: i++,
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors[0],
                description: item.volumeInfo.description,
                thumbnail: item.volumeInfo.imageLinks.smallThumbnail,
                info: item.volumeInfo.infoLink,
                saved: false
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

    handleSaveSubmit = currentId => {
        this.state.searchResult.map(item => {
            
            if(currentId === item.id){
                API.saveBook({
                    title: item.title, 
                    author: item.author,
                    description: item.description,
                    image: item.thumbnail,
                    link: item.info
                });
               
            }
        });   
    }

    handleViewSubmit = link => {
        this.state.searchResult.map(item => {
            
            if(link === item.info){
                global.window.location.href=link;
            }
        });   
    }

    render(){
        return(
            <Container>
                 <Link to={"/save"}>
                      <strong>
                        View saved books
                      </strong>
                      
                    </Link>
                <Row>
                    <Col size="md-12">
                        <h5></h5>
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
                                    handleSaveSubmit={this.handleSaveSubmit}
                                    handleViewSubmit={this.handleViewSubmit}
                                    id={result.id}
                                    title={result.title}
                                    author={result.author}
                                    description={result.description}
                                    image={result.thumbnail}
                                    link={result.link}
                                    buttonTypeOne={"View"}
                                    buttonTypeTwo={"Save"}
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