import React from "react"

import { SEO, ContactForm } from "../components/"
import { Hero, GridBox, Services, Banner, Reviews } from "../components/pages/index/"

const HomePage = () => {
   return (
      <>
         <SEO title="Hem" />
         <Hero />
         <GridBox />
         <Services />
         <Banner />
         <Reviews />
         <ContactForm headline="Bli en av våra samarbetspartners" />
      </>
   )
}

export default HomePage;