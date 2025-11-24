import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-3 text-2xl bg-emerald-800'>
      <h3>Sheriyans</h3>
      <div className='flex gap-30'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Product</h4>
      </div>
    </div>
  )
}

export default Navbar
