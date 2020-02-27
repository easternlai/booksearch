import React from "react";
import {Row, Col, Container} from "../Grid";
import CardBut from "../CardBut";

function Card (props){
    return (
        <Container>
            <Row>
                <Col size="md-6">
                <p>{props.title}</p>
                <p>Written by: {props.author}</p>
                </Col>
                <Col size="md-6">
                    <CardBut>
                        view
                    </CardBut>
                    <CardBut>
                        save
                    </CardBut>
                </Col>
            </Row>
            <Row>
                <Col size="md-3">
                    <img src={props.image}></img>
                </Col>
            </Row>
        </Container>
    );
}

export default Card;