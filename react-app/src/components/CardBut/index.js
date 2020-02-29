import React from "react";

function CardBut (props){
    return(
    <button onClick={()=>props.buttonFunction(props.id)}>{props.children}</button>
    );
}

export default CardBut;