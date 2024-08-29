import React, { useEffect, useRef, useState } from "react"
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import TimelineContent from "./TimelineContent"
import { goutte } from "../../assets/images/images"
import TeamMember from "./TeamMember"

const About = () => {
  const [date, setDate] = useState(0);
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
    if (ref.current) {
      ref.current.addEventListener('mousemove', handleMousePosition)
    }

    return () => {

      ref.current.removeEventListener('mousemove', handleMousePosition)
      if (ref.current) {
        ref.current.removeEventListener('mousemove', handleMousePosition);
      }
    }
  }, [])

  const handleDateClick = (e) => {
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
            >line
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
          <TimelineContent />
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