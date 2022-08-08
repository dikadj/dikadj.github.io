import $ from "jquery";
import Masonry from "masonry-layout";
import { AiFillBehanceCircle, AiFillGithub, AiFillDribbbleCircle, AiFillTwitterCircle, AiFillMail } from "react-icons/ai"
import { FaPencilAlt, FaPaperPlane, FaRssSquare } from "react-icons/fa"
import { Routes, Route, Link } from "react-router-dom"

$(document).ready(() => {
  const elem = document.querySelector(".grid");
  const msnry = new Masonry(elem, {
    // options
    itemSelector: ".grid-item",
    // columnWidth: 200,
    // horizontalOrder: true
    fitWidth: true
  });
});

// Images
const fotoPortfolio = require("./assets/foto-portfolio.jpg")
// const fotoGunung = require("./assets/mountain.jpg")
// const pattern0 = require("./assets/pattern-0.png")
// const pattern1 = require("./assets/pattern-1.jpg")
// const pattern2 = require("./assets/pattern-2.jpg")
const pattern3 = require("./assets/pattern-3.jpg")
const pattern4 = require("./assets/pattern-4.jpg")
const pattern5 = require("./assets/pattern-5.jpg")
// const pattern6 = require("./assets/pattern-6.jpg")
const pattern7 = require("./assets/pattern-7.jpg")
// const pattern8 = require("./assets/pattern-8.jpg")
// const pattern9 = require("./assets/pattern-9.jpg")
const pattern10 = require("./assets/pattern-10.jpg")

// Data
const iterateGridItems = [
  {
    id: "1",
    className: "",
    linkTo: "",
    linkCursor: "unset",
    text: "",
    textStyle: {

    },
    wrapperStyle: { width: "25%", height: "33vh" },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      background: "" 
    }
  },
  {
    id: "2",
    className: "",
    linkTo: "",
    linkCursor: "unset",
    text: "",
    textStyle: {

    },
    wrapperStyle: { width: "25%", height: "8vh", background: "" },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      background: "" 
    }
  },
  {
    id: "3",
    className: "",
    linkTo: "",
    linkCursor: "unset",
    text: "",
    textStyle: {

    },
    wrapperStyle: { width: "25%", height: "13vh", background: "" },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      background: "" 
    }
  },
  {
    id: "4",
    className: "",
    linkTo: "",
    linkCursor: "unset",
    text: "",
    textStyle: {

    },
    wrapperStyle: { width: "25%", height: "33vh", background: "" },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      background: "" 
    }
  },
  {
    id: "5",
    linkTo: "",
    linkCursor: "unset",
    text: <small style={{ 
        filter: "drop-shadow(5px 5px 10px black)" 
      }}>WEB DEVELOPER</small>,
    textStyle: {
      transform: "rotate(-90deg)",
    },
    wrapperStyle: {
      width: "25%",
      height: "45vh",
      filter: "drop-shadow(5px 5px 10px black)",
    },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      backgroundColor: "#97D9E1",
      backgroundImage : `linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(${pattern4})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "all 0.3s ease-in-out",
    }
  },
  {
    id: "6",
    className: "",
    linkTo: "",
    linkCursor: "unset",
    text: "",
    textStyle: {

    },
    wrapperStyle: {
      width: "25%",
      height: "30vh",
      filter: "drop-shadow(5px 5px 10px black)",
    },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      backgroundColor: "#FBAB7E",
      backgroundImage : `url(${fotoPortfolio})`,
      backgroundSize: "cover",
      transition: "all 0.3s ease-in-out",
    }
  },
  {
    id: "7",
    linkTo: "",
    linkCursor: "unset",
    text: <small style={{ 
      filter: "drop-shadow(5px 5px 10px black)" 
    }}>UI/UX DESIGNER</small>,
    textStyle: {
      transform: "rotate(-90deg)"
    },
    wrapperStyle: {
      width: "25%",
      height: "40vh",
      filter: "drop-shadow(5px 5px 10px black)",
    },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      backgroundColor: "#FAACA8",
      backgroundImage : `linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(${pattern5})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "all 0.3s ease-in-out",
    }
  },
  {
    id: "8",
    className: "_link",
    linkTo: "/contact",
    linkCursor: "pointer",
    text: <span to="/contact" style={{ 
      color: "#dbdbdb",
      textDecoration: "none",
      fontFamily: "dancing_scriptregular",
      fontWeight: "normal",
      fontStyle: "normal",
      filter: "drop-shadow(5px 5px 10px black)",
    }}><span className="h5"><FaPaperPlane /></span> Contact</span>,
    textStyle: {
      transform: "rotate(-90deg)"
    },
    wrapperStyle: {
      width: "25%",
      height: "40vh",
      filter: "drop-shadow(5px 5px 10px black)",
    },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      backgroundColor: "#D9AFD9",
      backgroundImage : `linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(${pattern7})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "all 0.3s ease-in-out",
    }
  },
  {
    id: "9",
    className: "_link",
    linkTo: "/blog",
    linkCursor: "pointer",
    text: <span style={{ 
      fontFamily: "dancing_scriptregular",
      fontWeight: "normal",
      fontStyle: "normal",
      filter: "drop-shadow(5px 5px 10px black)",
    }}><span className="h5"><FaRssSquare /></span> Blog</span>,
    textStyle: {
      transform: "rotate(-90deg)"
    },
    wrapperStyle: {
      width: "25%",
      height: "40vh",
      filter: "drop-shadow(5px 5px 10px black)",
    },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      backgroundColor: "#FF9A8B",
      backgroundImage : `linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(${pattern10})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "all 0.3s ease-in-out",
    }
  },
  {
    id: "10",
    className: "_link",
    linkTo: "/work",
    linkCursor: "pointer",
    text: <span style={{ 
      fontFamily: "dancing_scriptregular",
      fontWeight: "normal",
      fontStyle: "normal",
      filter: "drop-shadow(5px 5px 10px black)",
    }}><FaPencilAlt /> Work</span>,
    textStyle: {
      transform: "rotate(-90deg)"
    },
    wrapperStyle: {
      width: "25%",
      height: "40vh",
      filter: "drop-shadow(5px 5px 10px black)",
    },
    itemStyle: { 
      width: "100%",
      height: "100%", 
      backgroundColor: "#FBAB7E",
      backgroundImage : `linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(${pattern3})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "all 0.3s ease-in-out",
    }
  }
];

const GridItem = ({ className, wrapperStyle, itemStyle, text, textStyle, onMouseEnter, onMouseLeave, linkTo, linkCursor, i }) => (
  <Link to={linkTo} className={className} style={{ 
    ...wrapperStyle, overflow: "hidden", cursor: `${linkCursor}`, textDecoration: "none"
  }}>
    <div className="d-flex justify-content-center align-items-center" 
      style={{ ...itemStyle }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
    >
      <div className={`item-bg-${i}`} style={{ ...itemStyle, position: "absolute" }} />
      <h4 className="text-center" style={{ ...textStyle, color: "#dbdbdb" }}>{text}</h4>
    </div>
  </Link>
);

const Home = () => {
  return (
      <div className="row">
        <div className="d-flex align-items-center justify-content-center justify-content-md-end col-12 col-md-4"
          style={{ background: "" }}
        >
          <div className="" style={{ color: "#dbdbdb" }}>
            <h2 className="pt-5"
              style={{ 
                fontFamily: "dancing_scriptregular",
                fontWeight: "normal",
                fontStyle: "normal",
                filter: "drop-shadow(5px 5px 10px black)",
              }}
            >
              Primadika Dwijantara
            </h2>
            <div className=""><AiFillMail className="h5" /> <span className="" style={{ filter: "drop-shadow(5px 5px 10px black)" }}>primadika.dwijantara@gmail.com</span></div>
          </div>
        </div>
        <div className="col-12 col-md-4" 
          style={{ background: "", margin: "0 auto", maxWidth: "500px" }}
        >
          <div className="grid">
            {iterateGridItems.map((item, i) => (
              <GridItem key={i} className={`${item.className} grid-item`} wrapperStyle={item.wrapperStyle} 
                itemStyle={item.itemStyle} text={item.text} textStyle={item.textStyle} i={i}
                linkTo={item.linkTo} linkCursor={item.linkCursor}
                onMouseEnter={() => { $(`.grid-item._link .item-bg-${i}`).css("transform", "scale(1.2)") }}
                onMouseLeave={() => { $(`.grid-item._link .item-bg-${i}`).css("transform", "scale(1)") }}
              />
            ))}
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start col-12 col-md-4"
          style={{ background: "", overflowX: "hidden" }}
        >
          <h2 className="pt-5"
            style={{ 
              color: "#dbdbdb",  
              fontFamily: "dancing_scriptregular",
              fontWeight: "normal",
              fontStyle: "normal",
            }}
          >
            <a href="https://behance.net/dikadj" style={{ color: "#dbdbdb" }}>
              <AiFillBehanceCircle 
                style={{ 
                  filter: "drop-shadow(5px 5px 10px black)" 
                }} 
              />
            </a> <a href="https://github.com/dikadj" style={{ color: "#dbdbdb" }}>
              <AiFillGithub 
                style={{ 
                  filter: "drop-shadow(5px 5px 10px black)" 
                }} 
              />
            </a> <a href="https://dribbble.com/dikadj" style={{ color: "#dbdbdb" }}>
              <AiFillDribbbleCircle 
                style={{ 
                  filter: "drop-shadow(5px 5px 10px black)" 
                }} 
              />
            </a> <a href="https://twitter.com/dikadj" style={{ color: "#dbdbdb" }}>
              <AiFillTwitterCircle 
                style={{ 
                  filter: "drop-shadow(5px 5px 10px black)" 
                }} 
              />
            </a>
          </h2>
        </div>
      </div>
  )
}

const App = () => {
  return (
    <div className="App" style={{ background: "", height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Home />} />
        <Route path="blog" element={<Home />} />
        <Route path="contact" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
