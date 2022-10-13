import React from "react";

const UserInfo = ({singleUser: {id, name, username, email, phone, website}, setIdOfUser}) => {
    return (
        <div>
            <h2>{id}) {name} - {username}</h2>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Website: {website}</h4>
            <button onClick={() => setIdOfUser(id)}>Get posts of user</button>
        </div>
    );
};

export {UserInfo};