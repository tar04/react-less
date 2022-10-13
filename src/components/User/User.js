import React from "react";

import "./User.css";

const User = ({user, setSingleUser, setIdOfUser}) => {

    const {id, name, username, email} = user;

    const showNewUser = () => {
        setSingleUser(user);
        setIdOfUser(null);
    }


    return (
        <div className="user">
            <h3>{id}) {name} ({username}) - {email}</h3>
            <button onClick={showNewUser}>Details</button>
        </div>
    );
};

export {User};