import React from "react"
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"
import "./Footer.scss"

const Footer = () => (
    <footer className="d-flex flex-column flex-md-row flex-wrap">
      <div id="newsletter" className="d-flex flex-column col-12 col-md-6 align-items-center justify-content-center"
        style={{ background: "hsl(0,0%,50%)", height: "300px" }}
      >
        <h1 className="text-uppercase">Like what you see?</h1>
        <p>Kindly subscribe to see more of the good stuff from the web</p>      
        <form id="newsletter-form" className="d-flex flex-column flex-md-row"
          action="https://www.freecodecamp.com/email-submit" method="POST"
        >
          <input id="email" type="email" className="py-2 px-3" placeholder="Enter your email address..." required />
          <input id="submit" type="submit" className="py-2 px-3 font-weight-bold a-button-blue" value="Subscribe" />
        </form>
      </div>
      <div id="contact" className="d-flex flex-column col-12 col-md-6 align-items-center justify-content-center"
        style={{ background: "hsl(0,0%,50%)" }}
      >
        <div className="d-flex flex-column p-4 align-items-center justify-content-center"
          style={{ background: "hsl(0,0%,15%)" }}
        >
          <div className="">
            <h3 className="" style={{ color: "hsl(0,0%,88%)" }}>Find me on</h3>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <a href="https://github.com/dikadj" className="display-6 p-2"
                id="github-link profile-link" 
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
            </a>
            <a href="https://twitter.com/dikadj" className="display-6 p-2"
                id="twitter-link" 
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/dikadj" className="display-6 p-2" 
                id="linkedin-link" 
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedin />
            </a>
            <a href="mailto:primadika.dwijantara@gmail.com" className="display-6 p-2"
                id="email-link"
                target="_blank"
                rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center col-12 py-2" style={{ background: "hsl(0,0%,15%)", color: "hsl(0,0%,100%)" }}>
        <span>&copy; Primadika Dwijantara 2021</span>
      </div>
  
  </footer>
)
  
export default Footer