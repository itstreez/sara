import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import WorkExperience from './components/WorkExperience/WorkExperience'
import WorkExperience2 from './components/Experience2/WorkExperience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
    return (
      <>
      
      <Header />
      <Nav />
      <About />
      {/* <Experience /> */}
      <WorkExperience />
      <WorkExperience2 />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />

      </>
    )
}

export default App
