import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <h1>CryptoHub</h1>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd ">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
      </div>
    </div>
  )
}

export default NavBar
