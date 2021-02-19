import React, { Component } from "react"
import Helmet from "react-helmet"
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"
// import $ from "jquery"
// import "animate.css"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Projects from "./components/Projects"
import BlogPosts from "./components/BlogPosts"
import Photos from "./components/Photos"
import './App.scss'

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
          <h3 className="" style={{ color: "hsl(0,0%,88%)" }}>Also find me on</h3>
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
          <button type="button" id="email-link"
            className="display-6 p-2"
            onClick={() => {
              window.open("mailto:primadika.dwijantara@gmail.com")
            }}
          >
            <FaEnvelope />
          </button>
        </div>
      </div>
    </div>
    <div className="text-center col-12 py-2" style={{ background: "hsl(0,0%,15%)", color: "hsl(0,0%,100%)" }}>
      <span>&copy; Primadika Dwijantara 2021</span>
    </div>

</footer>
)

const App = () => (
  <div>
    <Helmet>
      {/* Bootstrap CSS */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
    </Helmet>
    {/* START CONTENT HERE */}

    <Header />
    <Welcome />
    <Projects />
    <BlogPosts />
    <Photos />
    <Footer />

    {/* END CONTENT HERE */}

    {/* Bootstrap JS */}
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossOrigin="anonymous"></script>
  </div>
)

export default App;
