import React from "react";
import { NavLink} from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
    return (
        <div className={"navigation"}>
            <NavLink to="users">Users</NavLink>
            <NavLink to="posts">Posts</NavLink>
        </div>
    );
};

export {Navigation};