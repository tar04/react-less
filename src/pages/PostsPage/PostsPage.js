import React from "react";
import {Outlet} from "react-router-dom";

import {Posts} from "../../components";

const PostsPage = () => {
    return (
        <div style={{display:"flex"}}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};