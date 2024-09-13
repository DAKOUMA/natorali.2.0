import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { goutte, logo, logoDark } from "../../assets/images/images";
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
    <motion.header>
      <motion.nav
        layout
        className={isScrolled ? 'scrolled' : ''}
        initial={{ backgroundColor: "#ffffff00", boxShadow: "none", y: 20 }}
        animate={isScrolled ? { backgroundColor: "#145858", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", y: 0 } : { backgroundColor: "#ffffff00", boxShadow: "none", y: 20 }}
        transition={{ duration: 0.4 }}
      >
        <Link to={'/'}>
          { isScrolled ? <img src={logo} className='logoGm' alt="" /> : <img src={logoDark} className='logoGm' alt="" />}
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
    </motion.header>
  )
}

export default NavBar