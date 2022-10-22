import React from "react";

const Dog = ({dog, dispatch}) => {
    return (
        <div>
            {dog.id}--{dog.name}
            <button onClick={() => dispatch({type: "deleteDog", payload: dog.id})}>Delete</button>
        </div>
    );
};

export {Dog};