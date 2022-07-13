import React from 'react'
import "./projects.css"
import Un from "../images/un.jpg"

const data=[
    {
        id: 1,
        image:Un,
        title: "15-minutes bible JS",
        description: "A single web app for heping me reading bible every day. Build with Firebase",
        github: 'https://github.com',
        demo: 'https://www.goodreads.com/quotes/tag/books' 
    },
    {
        id: 2,
        image:Un,
        title: "Quotes",
        description: "A single web page with a lot of quotes from my favorite books. Build with HTML and CSS",
        github: 'https://github.com',
        demo: 'https://www.goodreads.com/quotes/tag/books' 
    },
    {
        id: 3,
        image:Un,
        title: "15-minutes bible React",
        description: "React version of 15-minutes-bible JS. Build with React and Firebase",
        github: 'https://github.com',
        demo: 'https://www.goodreads.com/quotes/tag/books' 
    },
    
]

function Projects() {
  return (
    <section id="projects">
        <h5>My recent work</h5>
        <h2>Projects</h2>

        <div className="container projects_container">
           
           {
               data.map(({id, image, title, description, github, demo})=>{
                return(
                    <article id={id} className="projects_item">
                <div className="projects_item_image">
                    <img src={image} alt={title}></img>
                </div>
                    <h3>{title} </h3>
                    <p className="description">{description}</p>
                    <div className="project_item">
                    <a href={github} className="btn" target="_blank">Github</a>
                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo </a>
                    </div>
            </article>
                )
            })
           }
          
        </div>
        
    </section>
  )
}

export default Projects