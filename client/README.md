# BookSearch

## Technologies Used

1. Javascript
2. Express
3. CSS
4. NPM
5. Git Bash
6. Heroku
7. 

## Program Description

This website allows the user to search for books, save them to a store list, and view and delete books from their list.   

## Code sample

The following code illustrates the API call and redirect.  

***

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

***
