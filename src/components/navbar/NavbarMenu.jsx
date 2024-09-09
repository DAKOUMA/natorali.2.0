import React, { useState } from 'react'
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const NavbarMenu = () => {

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='navbarMenu-container'>
            {
                !toggle ?
                    <HiOutlineBars3 onClick={handleToggle} size={"4rem"} color='#C9E0CA' />
                    :
                    <HiXMark onClick={handleToggle} size={"4rem"} color='#C9E0CA' />
            }
            <ul className={`navbarMenu-list ${!toggle ? '' : 'menu-slide'}`}>
                <motion.li
                    whileHover={{ scale: 1.2, transition: {duration: 0.5, delay: 0} }}
                ><Link to={'/'}>Home</Link></motion.li>
                <motion.li
                    whileHover={{ scale: 1.2, transition: {duration: 0.5, delay: 0} }}
                ><Link to={'/about'}>About</Link></motion.li>
                <motion.li
                    whileHover={{ scale: 1.2, transition: {duration: 0.5, delay: 0} }}
                ><Link to={'/product'}>Products</Link></motion.li>
                <motion.li
                    whileHover={{ scale: 1.2, transition: {duration: 0.5, delay: 0} }}
                ><Link to={'/contact'}>Contact</Link></motion.li>
            </ul>
        </div>
    )
}

export default NavbarMenu