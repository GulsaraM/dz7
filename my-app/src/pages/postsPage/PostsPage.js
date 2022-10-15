import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

function PostsPage(props) {

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }

    useEffect(getPosts, []);

    return (
        <>
            <h1>Posts Page</h1>
            <ul>
                {posts.slice(0, 10).map(post => <li>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>)}
            </ul>
        </>
    );
}

export default PostsPage;