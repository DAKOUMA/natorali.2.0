import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { goutte, logo } from "../../assets/images/images";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import NavbarMenu from './NavbarMenu';

const NavBar = () => {

  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  })

  return (
    <header>
      <motion.nav
        layout
        className={isScrolled ? 'scrolled' : ''}
        initial={{ backgroundColor: "#ffffff00", boxShadow: "none" }}
        animate={isScrolled ? { backgroundColor: "#145858", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" } : { backgroundColor: "#ffffff00", boxShadow: "none" }}
        transition={{ duration: 0.3 }}
      >
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
        <NavbarMenu />
      </motion.nav>
    </header>
  )
}

export default NavBar