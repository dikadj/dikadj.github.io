import React from "react"
import "./Cards.scss"

const projects = [
    {
        id: 0,
        title: "Mountain View",
        copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains"
    },
    {
        id: 1,
        title: "To The Beach",
        copy: "Plan your next beach trip with these fabulous destinations"
    },
    {
        id: 2,
        title: "Desert Destinations",
        copy: "It's the desert you've always dreamed of"
    },
    {
        id: 3,
        title: "Explore The Galaxy",
        copy: "Seriously, straight up, just blast off into outer space today"
    }
]

const Card = ({title, copy}) => (
    <div className="card">
        <div className="content">
            <h2 className="title">{title}</h2>
            <p className="copy">{copy}</p>
            <button className="btn">View Trips</button>
            <button className="btn">Book Now</button>
        </div>
    </div>
)

function Cards() {
    return (
        <main className="page-content">
            {projects.map(proj => (
                <Card title={proj.title} copy={proj.copy} />
            ))}
        </main>
    )
}

export default Cards