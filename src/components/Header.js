import React from "react"
import $ from "jquery"
import logo from "./../svg/logo.svg"
import "./Header.scss"

// HEADER FUNCTIONS
$(document).ready(() => {
  function setOpacTransformAndBtnText(opacity, translateY, buttonText) {
    $("#navbarCollapse").css({ 
      opacity: opacity,
      transform: `translateY(${translateY})`, // move #navbarCollapse off screen
    })
    $("button#navToggle").text(buttonText) 
  }
  function collapseTheNavbar(isOpacityOne, navbarVisibleHeight, navbarCollapseHeight) {
    if (isOpacityOne) {
      setOpacTransformAndBtnText(0, `${-(navbarVisibleHeight + navbarCollapseHeight)}px`, "☰")
    } else {
      setOpacTransformAndBtnText(1, 0, "✕")
    }
  }
  const navbarVisibleHeight = $("#navbarVisible").innerHeight()
  const navbarCollapseHeight = $("#navbarCollapse").innerHeight()
  $("button#navToggle").on("click", () => {
    const isOpacityOne = $("#navbarCollapse").css("opacity") == 1 // check whether navbarCollapse is visible
    collapseTheNavbar(isOpacityOne, navbarVisibleHeight, navbarCollapseHeight)
  })
  $("button#navToggle").on("focus", () => {
    setOpacTransformAndBtnText(1, 0, "✕")
  })
  // $("button#navToggle").on("blur", () => {
  //   setOpacTransformAndBtnText(0, -(navbarVisibleHeight + navbarCollapseHeight), "☰")
  // })
})
  
// HEADER VIEW (PRESENTATIONAL) TEMPLATE
const Header = () => (
  <header  id="navbar" className="position-fixed w-100 h-auto">
    <nav id="navbarVisible" className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        <div id="logo" className="m-3">
          <a className="" href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <button type="button" id="navToggle" className="m-3">☰</button>
      </div>
    </nav>
    <nav id="navbarCollapse" className="position-absolute w-100 d-flex align-items-center justify-content-center">
      <ul  className="d-flex flex-column align-items-center">
        <li className="py-4"><a className="a-button-blue px-3 py-2" href="#">About</a></li>
        <li className="py-4"><a className="a-button-blue px-3 py-2" href="#">Work</a></li>
        <li className="py-4"><a className="a-button-blue px-3 py-2" href="#">Blog</a></li>
        <li className="py-4"><a className="a-button-blue px-3 py-2" href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
)
  
export default Header