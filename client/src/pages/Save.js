import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import API from "../utilities/API";
import Card from "../components/Card";


class Save extends Component{
    state = {
        savedBooks: []
    };

    componentDidMount(){
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks().then(res => {
            this.setState({savedBooks:res.data});
            console.log(this.state.savedBooks);
        });
    };

    handleViewSubmit = currentId => {
        this.state.searchResult.map(item => {
            
            if(currentId === item._id){
                console.log(currentId);
            }
        });   
    }

    handleUnsaveSubmit = currentId => {

        this.state.savedBooks.map(item => {
            if(currentId===item._id){
                API.deleteBook(currentId).then(res => console.log("test"));
            }
        });
    }

    render(){
        return(
            <Container>
                <p>Saved Books</p>

                {this.state.savedBooks.map(result=> (
                    <Row>
                        <Card
                        handleViewSubmit={this.handleViewSubmit}
                        handleSaveSubmit={this.handleUnsaveSubmit}
                        id={result._id}
                        title={result.title}
                        author={result.author}
                        description={result.description}
                        image={result.image}
                        link={result.link}
                        buttonTypeOne={"View"}
                        buttonTypeTwo={"Unsave"}
                        />
                    </Row>
                ))}
            </Container>
            
        );
    }
}

export default Save;