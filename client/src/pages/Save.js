import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import API from "../utilities/API";

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

    render(){
        return(
            <Container>
                <p>Saved Books</p>

                {this.state.savedBooks.map(result=> (
                    <Row>
                        {result.author} 
                    </Row>
                ))}
            </Container>
            
        );
    }
}

export default Save;