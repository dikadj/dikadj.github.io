import React from "react"
import welcomeImg from "./../img/welcome.jpg"
import "./Welcome.scss"


const Welcome = () => (
    <section id="welcome-section" className="d-flex flex-column justify-content-center align-middle vh-100" style={{ background: `top right / cover no-repeat url(${welcomeImg})` }}>
      <div className="d-flex flex-column text-center">
        <h1 className="py-3"><small>I give value, not just good design</small></h1>
        <div>
          {/* HREF TO ABOUT PAGE */}
          <a href="#" className="a-button-blue px-3 py-2">Learn More</a>
        </div>
      </div>
    </section>
  )

  export default Welcome