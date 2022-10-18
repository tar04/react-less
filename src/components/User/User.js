import React from "react";
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user;
    return (
        <div style={{display: "flex", justifyContent: "space-between", margin: "10px"}}>
            {id}) {name} <Link to={id.toString()} state={user}>
            <button>Get details</button>
        </Link>
        </div>
    );
};

export {User};