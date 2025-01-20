import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {

  const[post, setPosts] = useState([])

  const addPost = (newPost) => {
    setPosts([...post , {...newPost, id:Date.now()}])
  }

  return (
<>

  <Router>

    {/* Header */}
    <header className='flex justify-between items-center bg-white text-black w-full'>
      {/* Logo */}
      <Link to='/home'><div className='ml-4 text-2xl'>Mini Blogs</div></Link>


      {/* Navbar */}
      <div>
        <nav>
          <ul className='flex justify-evenly items-center p-8 gap-16'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/createpost' className='hover:underline'>Create Post</Link>
            <Link to='/about' className='hover:underline'>About this web app</Link>
          </ul>
        </nav>
      </div>
    </header>


    <Routes>
      <Route path='/home' element={<Home post={post}/>}/>
      <Route path='/createpost' element={<CreatePost addPost={addPost}/>}/>
      <Route path='/about' element={<About />}/>
    </Routes>

  </Router>

  <Footer />
</>
)
}
