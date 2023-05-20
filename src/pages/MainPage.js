import React, {useEffect, useState} from 'react';

const MainPage = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => setPost(response))
    }, [])

    return (
        <div>
            <ol>
                {post.map( posts =>
                    <li key={posts.id}>
                        {posts.title.toUpperCase()}
                    </li>
                )}
            </ol>
        </div>
    );
};

export default MainPage;