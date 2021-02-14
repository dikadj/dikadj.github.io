import React, { Component } from "react"
import Helmet from "react-helmet"
import Masonry from "masonry-layout"
import $ from "jquery"
// import "animate.css"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Projects from "./components/Projects"
import './App.scss'

$(document).ready(() => {
  var elem = document.querySelector(".masonry")
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".masonry-item",
    // columnWidth: 200,
  })
})


// Convert text to slug (for url)
const convertToSlug = text => text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')

// current date (change on publish)
const date = new Date()
// get current day
const getDay = (d) => {
  switch (d) {
    case 0:
      return "Minggu"
    case 1:
      return "Senin"
    case 2:
      return "Selasa"
    case 3:
      return "Rabu"
    case 4:
      return "Kamis"
    case 5:
      return "Jumat"
    case 6:
      return "Sabtu"  
    default:
      return "Not a day";
  }
}
// get current month
const getMonth = (mo) => {
  switch (mo) {
    case 0:
      return "Januari"
    case 1:
      return "Februari"
    case 2:
      return "Maret"
    case 3:
      return "April"
    case 4:
      return "Mei"
    case 5:
      return "Juni"
    case 6:
      return "Juli"
    case 7:
      return "Agustus"
    case 8:
      return "September"
    case 9:
      return "Oktober"
    case 10:
      return "November"
    case 11:
      return "Desember"  
    default:
      return "Not a month";
  }
}
// blog posts mockup
const blogPosts = [
  {
    id: 0,
    title: "What Is The Difference Between A Website And A Web Application?",
    author: "Primadika D.",
    published: `${getDay(date.getDay())}, ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
    text: "A very interesting albeit old thread on Stack Overflow sparked my curiosity the other day. The original poster of the thread asked: What is the difference between a website and a web-enabled application?",
  },
  {
    id: 1,
    title: "Why Is Node JS Becoming Popular?",
    author: "Primadika D.",
    published: `${getDay(date.getDay())}, ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
    text: "In simpler words, Node.js surpasses other available web applications by replacing the WebSockets with the extensive push technology. Wondering what is so special about it?",
  },
  {
    id: 2,
    title: "Flutter Vs. React Native: Which One to Choose?",
    author: "Primadika D.",
    published: `${getDay(date.getDay())}, ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
    text: "The leading market players and development frameworks - Flutter and React Native have become top contenders competing to prove their worth across cross-platform mobile app development.",
  },
  {
    id: 3,
    title: "Top JavaScript Frameworks: What’s Going To Rule 2021?",
    author: "Primadika D.",
    published: `${getDay(date.getDay())}, ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
    text: "The year 2020 underwent the most outrageous global coronavirus pandemic. This ongoing crisis also affected all aspects of human existence in utter terms.",
  },
  {
    id: 4,
    title: "What Is The Difference Between A Website And A Web Application?",
    author: "Primadika D.",
    published: `${getDay(date.getDay())}, ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
    text: "A very interesting albeit old thread on Stack Overflow sparked my curiosity the other day. The original poster of the thread asked: What is the difference between a website and a web-enabled application?",
  },
  {
    id: 5,
    title: "Why Is Node JS Becoming Popular?",
    author: "Primadika D.",
    published: `${getDay(date.getDay())}, ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
    text: "In simpler words, Node.js surpasses other available web applications by replacing the WebSockets with the extensive push technology. Wondering what is so special about it?",
  },
  {
    id: 6,
    title: "Flutter Vs. React Native: Which One to Choose?",
    author: "Primadika D.",
    published: `${getDay(date.getDay())}, ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
    text: "The leading market players and development frameworks - Flutter and React Native have become top contenders competing to prove their worth across cross-platform mobile app development.",
  },
  {
    id: 7,
    title: "Top JavaScript Frameworks: What’s Going To Rule 2021?",
    author: "Primadika D.",
    published: `${getDay(date.getDay())}, ${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`,
    text: "The year 2020 underwent the most outrageous global coronavirus pandemic. This ongoing crisis also affected all aspects of human existence in utter terms.",
  },
]

const slugs = blogPosts.map(item => convertToSlug(item.title))

const BlogPosts = () => (
  <section id="blog-posts" className="">
    <div className="blog-post-header">
      <h1 className="p-4 text-center text-uppercase"><small>Find out what's going on in the digital world</small></h1>
    </div>
    <div className="blog-post-tiles masonry">
        {blogPosts.map(post=>(
          <div className={`masonry-item col-12 col-md-4 col-lg-3 ${post.id == 3 ? "grid-item--width2" : ""} p-4`}>
            <h3>{post.title}</h3>
            <div><span className=""><small>By {post.author} | {post.published}</small></span></div>
            <p>{post.text}</p>
            <div>https://dikadj.github.io/{slugs[post.id]}</div>
          </div>
        ))}
    </div>
  </section>
)

const Photos = () => (
  <section id="photos" className="">
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
