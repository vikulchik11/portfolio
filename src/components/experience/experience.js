import React from 'react'
import "./experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"

function Experience() {
  return (
    <section id="experience">
        <h5>My Skills</h5>
        <h2>My Experience</h2>

        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Frontnd Developement</h3>
                <div className="experience_content">
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon"/>
                    <div>
                    <h4>HTML</h4>
                    <small className="text_light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon"/>
                    <div>
                    <h4>CSS</h4>
                    <small className="text_light">Intermediate</small>
                    </div>
                </article> 
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon" />
                    <div>
                    <h4>JavaScript</h4>
                    <small className="text_light">Experienced</small>
                    </div>
                </article> 
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon"/>
                    <div>
                    <h4>Bootstrap</h4>
                    <small className="text_light">Experienced</small>
                    </div>
                </article> 
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon"/>
                    <div>
                    <h4>SemanticUI</h4>
                    <small className="text_light">Experienced</small>
                    </div>
                </article> 
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon"/>
                    <div>
                    <h4>ReactJS </h4>
                    <small className="text_light">Experienced</small>
                    </div>
                </article>
                </div>

            </div>
            <div className="experience_backend">
            <h3>Backend Developement</h3>
                <div className="experience_content">
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon"/>
                    <div>
                    <h4>Node JS</h4>
                    <small className="text_light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon"/>
                    <div>
                    <h4>MongoDB</h4>
                    <small className="text_light">Basic</small>
                    </div>
                </article> 
            
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon"/>
                    <div>
                    <h4>MySQL</h4>
                    <small className="text_light">Basic</small>
                    </div>
                </article> 
                <article className="experience_details">
                    <BsFillPatchCheckFill className="experience_details_icon"/>
                    <div>
                    <h4>Java</h4>
                    <small className="text_light">Basic</small>
                    </div>
                </article> 
                </div>
            </div>

        </div>
        
        </section>
  )
}

export default Experience