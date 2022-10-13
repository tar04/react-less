import React from "react";

const Post = ({post:{id,title,body}}) => {
    return (
        <div>
            <h5>{id}) {title}</h5>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {Post};