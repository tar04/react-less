import React from "react";
import {Outlet} from "react-router-dom";

import {Users} from "../../components";

const UsersPage = () => {
    return (
        <div style={{display:"flex"}}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};