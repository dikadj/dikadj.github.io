import React, { Component } from "react"
import Helmet from "react-helmet"
// import Masonry from "masonry-layout"
// import $ from "jquery"
// import "animate.css"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Projects from "./components/Projects"
import BlogPosts from "./components/BlogPosts"
import './App.scss'

const photos = [
  {
    id: 0,
    alt: "Summer",
    src: "https://images.unsplash.com/photo-1572246538688-3f326dca3951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    width: 12,
    height: 18,
  },
  {
    id: 1,
    alt: "Fall",
    src: "https://images.unsplash.com/photo-1467649165350-bdae46d9779b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    width: 12,
    height: 18,
  },
  {
    id: 2,
    alt: "Autumn",
    src: "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    width: 12,
    height: 8,
  },
  {
    id: 3,
    alt: "Winter",
    src: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80",
    width: 12,
    height: 15,
  },
  {
    id: 4,
    alt: "Spring",
    src: "https://images.unsplash.com/photo-1555143929-a40c91212992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80",
    width: 12,
    height: 16,
  },
  {
    id: 5,
    alt: "Summer",
    src: "https://images.unsplash.com/photo-1572246538688-3f326dca3951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    width: 12,
    height: 18,
  },
  {
    id: 6,
    alt: "Fall",
    src: "https://images.unsplash.com/photo-1467649165350-bdae46d9779b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    width: 12,
    height: 18,
  },
  {
    id: 7,
    alt: "Autumn",
    src: "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    width: 12,
    height: 8,
  },
  {
    id: 8,
    alt: "Winter",
    src: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80",
    width: 12,
    height: 15,
  },
  {
    id: 9,
    alt: "Spring",
    src: "https://images.unsplash.com/photo-1555143929-a40c91212992?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80",
    width: 12,
    height: 16,
  },
  {
    id: 10,
    alt: "Summer",
    src: "https://images.unsplash.com/photo-1572246538688-3f326dca3951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    width: 12,
    height: 18,
  },
  {
    id: 11,
    alt: "Fall",
    src: "https://images.unsplash.com/photo-1467649165350-bdae46d9779b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    width: 12,
    height: 18,
  },
]

const Photos = () => (
  <section id="photos" className="">
    <div id="" className="">
      {photos.map(p=>(
        <div className="">
          <img src={p.src} alt={p.alt} />
        </div>
      ))}
    </div>
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
    {/* <Photos /> */}
    <Footer />

    {/* END CONTENT HERE */}

    {/* Bootstrap JS */}
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossOrigin="anonymous"></script>
  </div>
)

export default App;
