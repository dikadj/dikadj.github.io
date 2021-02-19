import React from "react"
import Masonry from "react-masonry-component"
import "./Photos.scss"

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
    <section id="photos" className="d-flex flex-column">
        <div className="photos-header my-1">
          <h1 className="p-4 text-center text-uppercase"><small>Captured On My Lenses</small></h1>
        </div>
        <Masonry id="" className="photo-tiles masonry align-self-center col-12 col-md-10 col-lg-9">
            {photos.map(p=>(
                <div className="article col-6 col-md-4 col-lg-3 p-1">
                <img className="rounded" src={p.src} alt={p.alt} width="100%" height="auto" />
                </div>
            ))}
        </Masonry>
    </section>
)

  export default Photos