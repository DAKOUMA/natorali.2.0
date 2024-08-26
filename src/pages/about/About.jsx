import React from "react"
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import TimelineContent from "./TimelineContent"
import { goutte } from "../../assets/images/images"
import TeamMember from "./TeamMember"

const About = () => {
  return (
    <>
      <NavBar />
      <main className="about-container">
        <article className="timeLine-container">
          <div className="timeLine">
            <span className="line">line</span>
            <span className="date-1">date-1</span>
            <span className="date-2">date-2</span>
            <span className="date-3">date-3</span>
          </div>
          <TimelineContent />
        </article>
        <article className="team-container">
          <h1>Our Team</h1>
          <div className="teamCard-container">
          {
            [...Array(5)].map((value, index) => (
              <TeamMember key={index}/>
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