import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

function Post(props) {

    const [post, setPost] = useState([])

    const params = useParams();

    const navigate = useNavigate();

    const getPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }

    const goToBack = () => {
        navigate(-1)
    }

    useEffect(getPost, []);

    return (
        <>
            <button onClick={goToBack}>back</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}

export default Post;