import React from "react"
import ProjectTiles from "./Cards"
import "./Projects.scss"

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
              <ProjectTiles className="project-tile" /> {/* will pass class to each tile */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  
  export default Projects