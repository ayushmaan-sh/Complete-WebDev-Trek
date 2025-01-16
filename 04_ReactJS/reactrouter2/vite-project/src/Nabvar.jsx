import React from 'react'
import { Link } from 'react-router-dom'

function Nabvar() {
  return (
    <div>
        <nav className='bg-black text-white p-6 mb-4'>
            <ul className='flex justify-evenly '>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nabvar