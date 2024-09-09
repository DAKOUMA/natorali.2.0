import React, { useEffect } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import productList from './productList'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

const Product = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])
  return (
    <>
      <NavBar />
      <div className='drop'>
      </div>
      <div className='drop1' >
      </div>
      <div className='drop2' >
      </div>
      <div className='drop4' >
      </div>
      <main className="product-container container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2}}
        >Nos Produits</motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2}}
        >
          Découvrez le meilleur de Madagascar en bouteille avec nos produits</motion.h2>
        <article className='productCard-container'>
          {
            productList.map((value, index) => (
              <ProductCard product={value} key={index} />
            ))
          }
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Product