import React from 'react'
import { Link } from 'react-router-dom'

function Home({ post }) {
  return (
    <>
    <div className='flex justify-center mt-10'>

    <Link to='/createpost' className='border-solid border-2 border-white p-4'>

    <button>Create Post</button>
    
    </Link>


    </div>
    <div className="relative top-2 m-10">
        {post.map(posts => (
            <div key={posts.id} className='bg-white rounded-lg shadow-md overflow-hidden mt-4 p-4'>
                <h2 className="text-lg text-black font-semibold mb-2"><Link to={`/post/${posts.id}`}>{posts.title}</Link></h2>
                <p className="text-gray-700">{posts.content.slice(0, 50)}...</p>
            </div>
        ))}
    </div>
</>
  )
}

export default Home