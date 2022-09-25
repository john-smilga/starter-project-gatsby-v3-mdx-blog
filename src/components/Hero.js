import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return <header className="hero">
    <StaticImage src="../assets/person.png"
    placeholder="blurred" className="hero-person"/>
  </header>  
}

export default Hero
