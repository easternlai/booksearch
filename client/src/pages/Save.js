import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import API from "../utilities/API";
import Card from "../components/Card";
import { Link } from "react-router-dom";



class Save extends Component{
    state = {
        savedBooks: []
    };

    componentDidMount(){
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks().then(res => {
            this.setState({ savedBooks : res.data });
            console.log(this.state.savedBooks);
        });
    };

    handleViewSubmit = link => {
 
        global.window.location.href=link;            
    }

    handleUnsaveSubmit = currentId => {

                API.deleteBook(currentId).then( (res) => this.loadBooks());
    }

    render(){
        return(
            <Container>
                <Link to={"/"}>
                    <strong>Click here to search for books</strong>
                </Link>
    

                {this.state.savedBooks.map(result=> (
                    <Row>
                        <Card
                        handleViewSubmit={() => this.handleViewSubmit(result.link)}
                        handleSaveSubmit={ () => this.handleUnsaveSubmit(result._id)}
                        id={result._id}
                        key={result._id}
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