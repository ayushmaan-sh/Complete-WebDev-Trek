import React, { useState } from 'react';

function CreatePost({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (title && content) {
            addPost({ title, content });
            setTitle('');
            setContent('');
        }
    };

    return (
        <>
            <form onSubmit={handleClick} className="w-96 m-auto mt-10">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post Title"
                    className="w-full mb-4 p-2 border rounded text-black"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full mb-4 p-2 border rounded text-black"
                    placeholder="Post Content"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default CreatePost;
