import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

import "./Navigation.css";
import {useAuth} from "../../hooks/useAuth";

const Navigation = () => {

    const {user, logOut} = useAuth();

    const navigate = useNavigate();

    return (
        <div className={"navigation"}>
            <NavLink to="users">Users</NavLink>
            <NavLink to="posts">Posts</NavLink>
            {user && <h1>{user}
                <button onClick={() => logOut(() => navigate("/"))}>Log out</button>
            </h1>}
        </div>
    );
};

export {Navigation};