import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.moudle.css'
export default function Navbar() {
  return (
    <div className='Navbar'>
        <div>
            spaceX
        </div>
        {/* <div id='search'>
        <input type='search'></input>
        <button>search</button>
        </div> */}
        <div className='NavbarLinks'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About us</Link>
            <Link className='link' to='/'>Contact</Link>
        </div>
    </div>
  )
}
