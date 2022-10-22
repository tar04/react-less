import React from "react";

const Cat = ({cat, dispatch}) => {
    return (
        <div>
            {cat.id}--{cat.name}
            <button onClick={()=>dispatch({type: "deleteCat", payload: cat.id})}>Delete</button>
        </div>
    );
};

export {Cat};