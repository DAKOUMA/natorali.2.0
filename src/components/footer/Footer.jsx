import React from 'react'
import { goutte } from '../../assets/images/images'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <img src={goutte} alt="" />
      <div className='footer-adresse'>
        <span>Madagascar, Toamasina 501. Cite Procoops Lot B-92 plle 31/22</span>
        <span>+261 32 42 672 35</span>
      </div>
      <div className='footer-link'>
        <Link to={'#'}><FaFacebookSquare size={'2rem'}/></Link>
        <Link to={'#'}><IoIosMail size={'2rem'}/></Link>
      </div>
    </footer>
  )
}

export default Footer