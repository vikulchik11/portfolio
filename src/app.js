import React from 'react'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Projects from './components/projects/projects'

const App = ()=> {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App