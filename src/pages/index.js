import React from "react"

import { SEO, ContactForm } from "../components/"
import { Hero, GridBox, Services, Banner, Reviews } from "../components/pages/index/"

const HomePage = () => {
   return (
      <>
         <SEO title="Home" />
         <Hero />
         <GridBox />
         <Services />
         <Banner />
         <Reviews />
         <ContactForm />
      </>
   )
}

export default HomePage;