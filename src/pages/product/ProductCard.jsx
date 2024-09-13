import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { HiXMark } from "react-icons/hi2";

const ProductCard = (props) => {
  const product = props.product

  const [overlayVisible, setOverlayVisible] = useState(false)

  const handleOverlay = () => {
    setOverlayVisible(prev => !prev)
  }

  const overlayContentClick = (event) => {
    event.stopPropagation()
  }
  return (
    
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 3, delay: 0.5 }}
    >
      <div className='productCard' onClick={handleOverlay}>
        <img
          className={`${overlayVisible ? 'active-image' : ''} product-image`}
          src={product.image}
          alt=""
          style={{ borderRadius: product.borderRadius }}

        />
        <h1>{product.name}</h1>
        <AnimatePresence>
        {
          overlayVisible ?
            <motion.div
            exit={{ opacity: 0, scale: 0, y: '100vh'}}
            transition={{ duration: 0.3 }}
              className='overlayBackground'
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div
                className='overlayContent'
                onClick={overlayContentClick}
              >
                <HiXMark
                  size={'2rem'}
                  className='Xoverlay'
                  onClick={handleOverlay} />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <img src={product.icon} alt="" className='overlay-icon' />
              </div>
            </motion.div>
            : undefined
        }
        </AnimatePresence>
        
      </div>
    </motion.div>
  )
}

export default ProductCard