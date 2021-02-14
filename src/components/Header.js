import React, { Component } from "react"
import $ from "jquery"
import logo from "./../svg/logo.svg"
import "./Header.scss"
  
// HEADER VIEW (PRESENTATIONAL) TEMPLATE
const HeaderView = ({ onNavToggleClick }) => (
  <header  id="navbar" className="position-fixed w-100 h-auto">
    <nav id="navbarVisible" className="d-flex flex-column position-relative">
      <div className="d-flex justify-content-between">
        <div id="logo" className="m-3">
          <a className="" href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <button onClick={onNavToggleClick} type="button" 
          id="navToggle" 
          className="m-3"
        >☰</button>
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

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onNavToggleClick = this.onNavToggleClick.bind(this)
  }
  onNavToggleClick() {
    const navbarCollapse = $("#navbarCollapse")
    const navToggle = $("#navToggle")
    const x = navbarCollapse.css("transform").split(",") // just to make it shorter
    const nCollapseTranslateY = x[x.length-1].slice(0, -1)
    const nCollapseOpacity = navbarCollapse.css("opacity")
    
    const isNavbarCollapsed = nCollapseTranslateY == 0 && nCollapseOpacity == 0
    if (isNavbarCollapsed) { // check whether #navbarCollapse is shown/hidden
      navbarCollapse.css({ transform: "translateY(100vh)", opacity: 1 })
      navToggle.text("✕")
    } else {
      navbarCollapse.css({ transform: "translateY(0)", opacity: 0 })
      navToggle.text("☰")
    }
  }
  render() {
    let { onNavToggleClick } = this
    return (
      <HeaderView onNavToggleClick={onNavToggleClick} />
    )
  }
}
  
// export default Header