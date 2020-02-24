import React from "react";

export function Input(props){
    return(
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function SearchBtn(props){
    return(
        <div className="form-group">
                <button onClick={props.handleFormSubmit}
                {...props} 
                className="btn btn-success">
                {props.children}
            </button>
        </div>
    )
}