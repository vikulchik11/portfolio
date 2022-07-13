import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">Viktoriya</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact </a></li>
      </ul>
    </footer>
  )
}

export default Footer