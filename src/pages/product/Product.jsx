import React, { useEffect } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import productList from './productList'
import ProductCard from './ProductCard'

const Product = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])
  return (
    <>
      <NavBar />
      <main className="product-container container">
        <h1>Nos Produits</h1>
        <h2>Découvrez le meilleur de Madagascar en bouteille avec nos produits</h2>
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