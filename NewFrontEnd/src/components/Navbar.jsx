import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='user'>
        <img src="https://hips.hearstapps.com/hmg-prod/images/michael-jordan.jpg" alt="" />
        <span className="name">Michael Jordan</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar