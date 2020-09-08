import React, { useContext } from "react"
import { GlobalContext } from '../context/GlobalContext'

import { SEO } from "../components/"
import { Hero } from "../components/pages/about/"

const AboutPage = () => {
   const { setIsModalOpen } = useContext(GlobalContext);

   return (
      <>
         <SEO title="About" />
         <Hero />
         <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      </>
   )
}

export default AboutPage
