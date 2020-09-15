import React from "react"

import { SEO, ContactForm } from "../components/"
import { Hero, GridBox, CallToAction } from "../components/pages/about/"

const AboutPage = () => {

   return (
      <>
         <SEO title="Om oss" />
         <Hero />
         <GridBox />
         <CallToAction />
         <ContactForm headline="Bli en av våra samarbetspartners" />
      </>
   )
}

export default AboutPage
