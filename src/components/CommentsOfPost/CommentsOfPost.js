import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {postService} from "../../service";

const CommentsOfPost = () => {

    const [comments, setComments] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        postService.getCommentsOfPost(id).then(comments => setComments(comments));
    }, [id]);

    return (
        <div>
            {comments.map(comment => <div key={comment.id}><h4>{comment.id}) {comment.name} ({comment.email})
                writes</h4><p>{comment.body}</p></div>)}
        </div>
    );
};

export {CommentsOfPost};