import React, { useEffect } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import Drop from './Drop'
import { goutte, goutteGm, goutteResp, huile, force } from '../../assets/images/images'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
const Home = () => {

  const { scrollY } = useScroll()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  const navigate = useNavigate()

  return (
    <>
      <NavBar />
      <div className='drop'>
      </div>
      <div className='drop1' >
      </div>
      <div className='drop2' >
      </div>
      <div className='drop3' >
      </div>
      <div className='drop4' >
      </div>
      <main className='home-container container' >
        <motion.img
          className='home-logo'
          src={goutteResp}
          alt=""
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.img
          className='home-logo-gm'
          src={goutteGm}
          alt=""
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.article
          className='home-text'
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >NATORALI</motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >Huiles vegetales 100% Naturelles</motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Chez Natorali, nous nous engageons à offrir le meilleur de la nature, en transformant les richesses de Madagascar en huiles végétales 100% pures et naturelles. Nos huiles, issues d'une première pression à froid, préservent toute la richesse des nutriments pour vous offrir un produit de qualité exceptionnelle.
          </motion.p>
          <motion.button
            onClick={() => navigate('/about')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          ><Link to={'/about'}>About Us</Link></motion.button>
        </motion.article>
      </main>
      <main className='container-2'>
        <motion.article
          className='home-fabrication autoShowElement'
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}

          transition={{ duration: 3, type: 'spring', stiffness: 30 }}
        >
          <div
            className='home-fabrication-image animate-image-base'
            style={{ backgroundImage: `url(${huile})` }}
          ></div>
          <div className='container2-text'>
            <h1>Fabrication Locale</h1>
            <p>
              Nous collaborons étroitement avec les agriculteurs locaux pour garantir des matières premières de première qualité. Chaque goutte de nos huiles porte en elle le savoir-faire et l'authenticité de Madagascar.
            </p>

          </div>
        </motion.article>
        <motion.article
          className='home-eco autoShowElement'
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}

          transition={{ duration: 3, type: 'spring', stiffness: 30 }}
        >
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
        </motion.article>
      </main>
      <Footer />
    </>
  )
}

export default Home