import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to crypto marketplace.</p>
        <form>
          <input type="text" placeholder='Search crypto...'/>
          <button>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change</p>
          <p style={{textAlign:"end"}}>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home
