import React, {useEffect, useState} from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {postService} from "../../service";

const PostDetails = () => {

    const {id} = useParams();

    const {state} = useLocation();

    const [singlePost, setSinglePost] = useState(state);

    useEffect(() => {
        if (!state) {
            postService.getById(id).then(post => setSinglePost(post))
        } else {
            setSinglePost(state)
        }
    }, [id, state])

    return (
        <div>
            {singlePost && <div>
                <h3>{singlePost.id}) {singlePost.title}</h3>
                <h5>{singlePost.body}</h5>
                <Link to={"comments"}>
                    <button>Show comments</button>
                </Link>
            </div>}
            <Outlet/>
        </div>
    );
};

export {PostDetails};