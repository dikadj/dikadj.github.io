import React from "react"
import $ from "jquery"
import Masonry from "masonry-layout"
import "./BlogPosts.scss"

$(document).ready(() => {
    $(".masonry").removeClass("d-flex") // BUG: initial masonry won't activate without this
    var msnry = new Masonry( ".masonry", {
        // options
        // itemSelector: '.grid-item',
        // columnWidth: 200
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
        return "Sunday"
        case 1:
        return "Monday"
        case 2:
        return "Tuesday"
        case 3:
        return "Wednesday"
        case 4:
        return "Thursday"
        case 5:
        return "Friday"
        case 6:
        return "Saturday"  
        default:
        return "Not a day";
    }
}
// get current month
const getMonth = (mo) => {
    switch (mo) {
        case 0:
        return "January"
        case 1:
        return "February"
        case 2:
        return "March"
        case 3:
        return "April"
        case 4:
        return "May"
        case 5:
        return "June"
        case 6:
        return "July"
        case 7:
        return "August"
        case 8:
        return "September"
        case 9:
        return "October"
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
    <div className="blog-post-tiles masonry d-flex"> {/* d-flex class removed on load */}
        {blogPosts.map(post=> (
            <div className="article p-4 col-12 col-md-4 col-lg-3">
                <div className="" >
                    <h3>{post.title}</h3>
                    <div><span className=""><small>By {post.author} | {post.published}</small></span></div>
                    <p>{post.text}</p>
                    <div>https://dikadj.github.io/{slugs[post.id]}</div>
                </div>
            </div>
        ))}
    </div>
  </section>
)

export default BlogPosts