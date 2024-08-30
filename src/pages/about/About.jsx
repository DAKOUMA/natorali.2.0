import React, { useEffect, useRef, useState } from "react"
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import TimelineContent from "./TimelineContent"
import { goutte } from "../../assets/images/images"
import TeamMember from "./TeamMember"
import { Link } from "react-router-dom"
import contentText from './Content'

const About = () => {
  const [date, setDate] = useState(25);
  const [timelineProgress, setTimelineProgress] = useState(0)
  const [mousePointer, setMousePointer] = useState(0);

  const ref = useRef(null)

  const handleMousePosition = (e) => {
    const spanWidth = ref.current.clientWidth;
    const mouseY = e.clientX
    const mousePositionY = (mouseY / spanWidth) * 100


    setMousePointer(mousePositionY)

    console.log(mousePositionY);

  }

  useEffect(() => {
      document.documentElement.style.setProperty('--mouse-position', 25), setDate(25);
    if (ref.current) {
      ref.current.addEventListener('mousemove', handleMousePosition)

    }

    return () => {

      if (ref.current) {
        ref.current.removeEventListener('mousemove', handleMousePosition);
      }
    }
  }, [])

  useEffect(() => {
    
  })

  const handleDateClick = (e) => {
    setTimeout(() => {
      switch (e) {
        case 1: document.documentElement.style.setProperty('--mouse-position', 25), setDate(25);
          break;

        case 2: document.documentElement.style.setProperty('--mouse-position', 50), setDate(50);
          break;

        case 3: document.documentElement.style.setProperty('--mouse-position', 100, setDate(100));
        default:
          break;
      }
      console.log(date);

    }, 300);

  }

  return (
    <>
      <NavBar />
      <main className="about-container container">
        <article className="timeLine-container">
          <div className="timeLine">
            <span
              className="line"
              ref={ref}
            >
            </span>
            <span
              className={`date date-1 ${date >= 25 ? 'active-date' : ''}`}
              onClick={() => handleDateClick(1)}
            >
            </span>
            <span
              className={`date date-2 ${date >= 50 ? 'active-date' : ''}`}
              onClick={() => handleDateClick(2)}
            >
            </span>
            <span
              className={`date date-3 ${date >= 100 ? 'active-date' : ''}`}
              onClick={() => handleDateClick(3)}
            >
            </span>
          </div>
          <div className="timelineText-container" >
            {
              contentText.map((value, index) => (
                <TimelineContent 
                date={date}
                setDate={setDate}
                content={value}
                key={index}
                />
              ))
            }
          </div>
        </article>
        <article className="team-container">
          <h1>Our Team</h1>
          <div className="teamCard-container">
            {
              [...Array(5)].map((value, index) => (
                <TeamMember key={index} />
              ))
            }
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default About