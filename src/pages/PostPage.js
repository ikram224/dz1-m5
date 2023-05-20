import React, {useState} from 'react';
import axios from "axios";

const PostPage = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [post, setPost] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newPost  = {
            title,
            body
        }

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', newPost)
        console.log(response.data)
    }

    return (
        <div>
            <h2>Форма для создания поста</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='add post'
                    onChange={(event) => setTitle(event.target.value) }
                />
                <textarea
                    placeholder='содержание'
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
                    <button onClick={handleSubmit} type='submit'>Создать пост</button>
            </form>
        </div>
    );
};

export default PostPage;