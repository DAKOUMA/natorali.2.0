import React from 'react'
import { goutte } from '../../assets/images/images'

const TimelineContent = () => {
    return (
        <div className="timeLine-content">
            <div className="timeLine-content-text">
                <h1>TITLE TIMELINE</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                </p>
            </div>
            <figure className="timeLine-content-image">
                <img src={goutte} alt="" />
            </figure>
        </div>
    )
}

export default TimelineContent