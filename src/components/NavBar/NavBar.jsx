import React, { useContext } from 'react'
import './NavBar.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'


const NavBar = () => {
  
  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value){
      case "usd" : {
        setCurrency({name : "usd", symbol: "$"})
        break
      }
      case "eur" : {
        setCurrency({name : "eur", symbol: "€"})
        break
      }
      case "brl" : {
        setCurrency({name : "brl", symbol: "R$"})
        break
      }
      default : {
        setCurrency({name : "usd", symbol: "$"})
        break
      }
    }
  }

  return (
    <div className='navbar'>
      <h1><Link to="/">CryptoHub</Link></h1>
      <ul>
      <Link to="/"><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd ">USD</option>
          <option value="eur">EUR</option>
          <option value="brl">BRL</option>
        </select>
      </div>
    </div>
  )
}

export default NavBar
