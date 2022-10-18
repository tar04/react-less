import React from "react";
import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div style={{display: "flex", justifyContent: "space-between", margin: "10px"}}>
            {id}) {title} <Link to={id.toString()} state={post}> <button>Get details</button>
        </Link>
        </div>
    );
};

export {Post};