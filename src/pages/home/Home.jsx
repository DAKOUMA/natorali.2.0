import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import Drop from './Drop'
import { goutte, goutteGm, goutteResp, huile, force } from '../../assets/images/images'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <NavBar />
      <main className='home-container container' >
        <img
          className='home-logo'
          src={goutteResp}
          alt=""
        />
        <img
          className='home-logo-gm'
          src={goutteGm}
          alt=""
        />
        <article className='home-text'>
          <h1>NATORALI</h1>
          <div className='drop'>

          </div>
          <div className='drop1' >

          </div>
          <h2>Huiles vegetales 100% Naturelles</h2>
          <p>
            Chez Natorali, nous nous engageons à offrir le meilleur de la nature, en transformant les richesses de Madagascar en huiles végétales 100% pures et naturelles. Nos huiles, issues d'une première pression à froid, préservent toute la richesse des nutriments pour vous offrir un produit de qualité exceptionnelle.
          </p>
          <button><Link to={'/about'}>About Us</Link></button>
        </article>
      </main>
      <main className='container-2'>
        <article className='home-fabrication' >
          <div
            className='home-fabrication-image animate-image-base'
            style={{ backgroundImage: `url(${huile})` }}
          ></div>
          <div className='container2-text'>
            <h1>Fabrication Locale</h1>
            <p>
              Nous collaborons étroitement avec les agriculteurs locaux pour garantir des matières premières de première qualité. Chaque goutte de nos huiles porte en elle le savoir-faire et l'authenticité de Madagascar.
            </p>
            <div className='drop2' >
            </div>
            <div className='drop3' >
            </div>
            <div className='drop4' >
            </div>
          </div>
        </article>
        <article className='home-eco'>
          <div
            className='home-eco-image animate-image-base'
            style={{ backgroundImage: `url(${force})` }}
          ></div>
          <div className='container2-text'>
            <h1>Processus Écologique</h1>
            <p>
              Notre méthode de première pression à froid permet de conserver les propriétés naturelles des graines, assurant ainsi des huiles riches en vitamines et en acides gras essentiels.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Home