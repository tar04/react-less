import React from "react";
import {Route, Routes} from "react-router-dom";

import {CommentsOfPost, Navigation, PostDetails, PostsOfUser, UserDetails} from "./components";
import {PostsPage, UsersPage} from "./pages";


const App = () => {

    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path={"/users"} element={<UsersPage/>}>
                    <Route path={":id"} element={<UserDetails/>}>
                        <Route path={"posts"} element={<PostsOfUser/>}/>
                    </Route>
                </Route>
                <Route path={"/posts"} element={<PostsPage/>}>
                    <Route path={":id"} element={<PostDetails/>}>
                        <Route path={"comments"} element={<CommentsOfPost/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export {App};