import React, { Component } from "react"
import Helmet from "react-helmet"
import $ from "jquery"
// import "animate.css"
import logo from "./svg/logo.svg"
import welcomeImg from "./img/welcome.jpg"
import './App.scss'

$(document).ready(() => {
  const navbarVisibleHeight = $("#navbarVisible").innerHeight()
  const navbarCollapseHeight = $("#navbarCollapse").innerHeight()
  $("button#navToggle").on("click", () => {
    if ($("#navbarCollapse").css("opacity") == 1) {
      $("#navbarCollapse").css({ 
        opacity: 0,
        transform: `translateY(${-(navbarVisibleHeight + navbarCollapseHeight)}px)`, // move #navbarCollapse off screen
      })
      $("button#navToggle").text("☰")
    } else {
      $("#navbarCollapse").css({ 
        opacity: 1,
        transform: `translateY(0)`, // move #navbarCollapse back on screen
      })
      $("button#navToggle").text("✕")
    }
  })
  $("button#navToggle").on("focus", () => {
    $("#navbarCollapse").css({ 
      opacity: 1,
      transform: `translateY(0)`, // move #navbarCollapse back on screen
    })
    $("button#navToggle").text("✕")
  })
  $("button#navToggle").on("blur", () => {
    $("#navbarCollapse").css({ 
      opacity: 0,
      transform: `translateY(${-(navbarVisibleHeight + navbarCollapseHeight)}px)`, // move #navbarCollapse off screen
    })
    $("button#navToggle").text("☰")
  })
})

const Header = () => (
  <header  id="navbar" className="position-fixed w-100 h-auto">
    <nav id="navbarVisible" className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        <div id="logo" className="m-2">
          <a className="" href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        {/* <button type="button" id="navToggle" className="m-3">✕</button> */}
        <button type="button" id="navToggle" className="m-3">☰</button>
      </div>
    </nav>
    <nav id="navbarCollapse" className="">
      <ul  className="text-center">
        <li className=""><a href="#">About</a></li>
        <li className=""><a href="#">Work</a></li>
        <li className=""><a href="#">Blog</a></li>
        <li className=""><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
)

const Welcome = () => (
  <section id="welcome-section" className="d-flex flex-column justify-content-center align-middle vh-100" style={{ background: `top right / cover no-repeat url(${welcomeImg})` }}>
    <h1 className="text-center"><small>I give value, not just good design</small></h1>
  </section>
)

const Projects = () => (
  <section id="projects" className="container">
    <div className="project-tile">
      <a href="https://dikadj.github.io/converse-landing-redesign/">Link to a project</a>
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
