import React, { useState } from 'react'
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom'

const NavbarMenu = () => {

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='navbarMenu-container'>
            {
                !toggle ? 
                <HiOutlineBars3 onClick={handleToggle} size={"4rem"} color='#C9E0CA'/> 
                : 
                <HiXMark onClick={handleToggle} size={"4rem"} color='#C9E0CA'/>
            }
            <ul className={`navbarMenu-list ${!toggle ? '' : 'menu-slide'}`}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/product'}>Products</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavbarMenu