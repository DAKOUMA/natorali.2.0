import React, { useEffect } from 'react'
import { goutte, huile } from '../../assets/images/images'
import contentText from './Content'
const TimelineContent = (props) => {

    const date = props.date
    const setDate = props.setDate
    const Text = props.content
    return (
        <div onClick={() => setDate(100) } className={`timeLine-content ${date === Text.name ? 'show-content' : 'hide-content'}`}>
            <div className="timeLine-content-text ">
                <h1>{Text.title}</h1>
                <p>
                    {Text.text}
                </p>
            </div>
            <img src={Text.image} alt="" className='timeLine-content-image' />
        </div>
    )
}

export default TimelineContent