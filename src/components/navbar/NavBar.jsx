import React from 'react'
import { Link } from 'react-router-dom'
import { goutte,logo } from "../../assets/images/images";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import NavbarMenu from './NavbarMenu';

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to={'/'}>
          <img src={logo} className='logoGm' alt="" />
          <img src={goutte} className='logoSm' alt="" />
        </Link>
        <ul className={`navbarMenu-list-lg`}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/product'}>Products</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        <NavbarMenu/>
      </nav>
    </header>
  )
}

export default NavBar