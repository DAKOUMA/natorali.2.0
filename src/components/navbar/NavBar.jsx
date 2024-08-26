import React from 'react'
import { Link } from 'react-router-dom'
import { goutte } from "../../assets/images/images";

const NavBar = () => {
  return (
    <header>
      <nav>
      <Link to={'/'}><img src={goutte} alt="" /></Link>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/product'}>Products</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </nav>
    </header>
  )
}

export default NavBar