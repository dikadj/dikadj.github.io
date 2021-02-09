import React, { Component } from "react"
import Helmet from "react-helmet"
import $ from "jquery"
// import "animate.css"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import ProjectTiles from "./components/Cards"
import './App.scss'

const Projects = () => (
  <section id="projects" className="">
    <div className="project-container container-fluid">
      <div className="row">
        <div className="project-header col-12 col-md-3 p-4 d-flex justify-content-center align-items-center">
          <h1 className="mb-0 w-50">THINGS I'VE BUILT</h1>
        </div>
        {/* <div className="project-tile">
          <a href="https://dikadj.github.io/converse-landing-redesign/">Link to a project</a>
        </div> */}
        <div className="col-12 col-md-9">
          <div className="row">
            <ProjectTiles className="project-tile" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const BlogPosts = () => (
  <section id="blog-posts">
    <div>Here's blog posts</div>
  </section>
)

const Photos = () => (
  <section id="photos">
    <div>Here's photos</div>
  </section>
)

const Footer = () => (
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
)

const App = () => (
  <div style={{ height: "5000px" }}>
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
