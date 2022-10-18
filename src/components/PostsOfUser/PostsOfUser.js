import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {userService} from "../../service";

const PostsOfUser = () => {

    const [posts, setPosts] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        userService.getPostsOfUser(id).then(posts => setPosts(posts))
    }, [id])

    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.id}) {post.title}</div>)}
        </div>
    );
};

export {PostsOfUser};