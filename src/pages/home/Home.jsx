import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import { goutte } from '../../assets/images/images'

const Home = () => {
  return (
    <>
      <NavBar />
      <main className='home-container'>
        <figure>
        <img
          className='home-logo'
          src={goutte}
          alt=""
        />
        </figure>
        <article className='home-text'>
          <h1>NATORALI</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <button>About Us</button>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Home