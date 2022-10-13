import React, {useEffect, useState} from "react";
import {userService} from "../../service";
import {Post} from "../Post/Post";

const Posts = ({idOfUser}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getPosts(idOfUser).then(posts =>setPosts(posts))
    }, [idOfUser])

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};