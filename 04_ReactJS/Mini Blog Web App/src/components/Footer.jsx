import React from 'react'

function Footer() {
  return (
    <>
  <div className='flex justify-center items-center'>
    <div className='bg-white text-black w-full absolute bottom-1 flex gap-32 justify-between items-center p-4'>
        <h1 className='max-w-60'>This Mini Blog Web App is developed by Ayushmaan Shukla</h1>
        <p>Github: <a href="https://www.github.com/ayushmaan-sh" className='text-purple-600 hover:underline'>ayushmaan-sh</a></p>
        <p>Twitter: <a href="https://www.x.com/ayush_maan_" className='text-blue-500 hover:underline'>ayush_maan_</a></p>
    </div>
  </div>
    </>
  )
}

export default Footer