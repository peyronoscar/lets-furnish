import React from "react"

import { SEO, ContactForm } from "../components/"
import { Hero, GridBox } from "../components/pages/index/"

const HomePage = () => {
   return (
      <>
         <SEO title="Home" />
         <Hero />
         <GridBox />
         <ContactForm />
      </>
   )
}

export default HomePage;