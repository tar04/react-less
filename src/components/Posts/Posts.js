import React, {useEffect, useState} from "react";

import {postService} from "../../service";
import {Post} from "../Post/Post";
import {useSearchParams} from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const [query, setQuery] = useSearchParams({page: "1"});

    // useEffect(() => {
    //     setQuery({page: "1"})
    // }, []);

    useEffect(() => {
        postService.getAll(query.get("page"), 5).then(posts =>setPosts(posts));
    }, [query]);

    function nextPage() {
        setQuery({page: (+query.get("page") + 1).toString()})

        //або, щоб зберігались інші параметри, можна написати так
        // const quer = Object.fromEntries(query.entries());
        // quer.page++;
        // setQuery(quer)
    }

    function prevPage() {
        setQuery({page: (+query.get("page") - 1).toString()})
    }

    return (
        <div style={{minWidth: "50%"}}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <div>
                {!!(+query.get("page")-1) && <button onClick={prevPage}>Prev</button>}
                {!!posts.length && <button onClick={nextPage}>Next</button>}
            </div>
        </div>
    );
};

export {Posts};