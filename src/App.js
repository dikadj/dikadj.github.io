import React, { Component } from "react"
// import Helmet from "react-helmet"
// import "animate.css"
import './App.scss'

const App = () => (
  <div>
    <div>
      {/* START CONTENT HERE */}

      <header>
        <nav id="navbar" className="">
          <a className="" href="/">Logo</a>
          <ul>
            <li><a href="#">About</a></li>
            <li><a hrerf="#">Work</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="welcome-section" className="">
        <h1>I give value, not just good design</h1>
      </section>

      <section id="projects" className="container">
        <div className="project-tile">
          <a href="https://dikadj.github.io/converse-landing-redesign/">Link to a project</a>
        </div>
      </section>

      <section id="blog-posts">
        <div>Here's blog posts</div>
      </section>

      <section id="photos">
        <div>Here's photos</div>
      </section>

      <footer className="">
        <div id="newsletter">
          Here's my newsletter
        </div>
        <div id="contact">
          <a href="https://github.com/dikadj" 
              id="github-link profile-link" 
              target="_blank"
              rel="noreferrer"
            >
              Link to github
          </a>
          <a href="https://github.com/dikadj" 
            id="email-link" 
          >
            Mail to
          </a>
        </div>
      </footer>

      {/* END CONTENT HERE */}
    </div>
  </div>
)

export default App;
