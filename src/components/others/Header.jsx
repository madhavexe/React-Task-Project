import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl text-white font-medium'>Hello <br /><span className='text-3xl font-semibold'>Madhav👋</span></h1>
        <button className='bg-red-500 text-white text-md px-3 py-2 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header