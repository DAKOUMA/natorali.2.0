import React from 'react'
import { goutte } from '../../assets/images/images'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <img src={goutte} alt="" />
      <div>
        <span>Madagascar, Toamasina 501. Cite Procoops Lot B-92 plle 31/22</span>
        <span>+261 32 42 672 35</span>
      </div>
      <div>
        <Link to={'#'}>Facebook</Link>
        <Link to={'#'}>Adresse Mail</Link>
      </div>
    </footer>
  )
}

export default Footer