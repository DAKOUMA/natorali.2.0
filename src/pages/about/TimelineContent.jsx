import React, { useEffect } from 'react'
import { goutte, huile } from '../../assets/images/images'
import contentText from './Content'
import { motion, AnimatePresence } from 'framer-motion'
const TimelineContent = ({ date, content, setDate }) => {


    const contentText = () => {
        for (let i = 0; i < content.length; i++) {
            if (content[i].name === date) {
                return content[i]
            }
        }
    }

    const Content = contentText()

    return (
        <div className='content-slider'>
            
            <motion.div
            className={`timeLine-content show-content `}
            key={Content.name}
            initial={{ x: '100vh', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100vh', opacity: 0 }}
        >
            <div className="timeLine-content-text ">
                <h1>{Content.title}</h1>
                <p>
                    {Content.text}
                </p>
            </div>
            <img src={Content.image} alt="" className='timeLine-content-image' />
        </motion.div>
        
        </div>
        
    )
}

export default TimelineContent