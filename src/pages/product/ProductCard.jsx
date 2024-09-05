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
    <div className='productCard' onClick={handleOverlay}>

      <img
        className={`${overlayVisible ? 'active-image' : ''} product-image`}
        src={product.image}
        alt=""
        style={{ borderRadius: product.borderRadius }}

      />
      <h1>{product.name}</h1>
      {
        overlayVisible ?
          <div
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
          </div>
          : undefined
      }
    </div>
  )
}

export default ProductCard