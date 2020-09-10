import React, { useEffect } from 'react'
import Theme from '../themes/theme'
import { SEO, ContactForm } from "../components/"

const ContactPage = () => {
   useEffect(() => {
      document.body.style.background = Theme.colors.light;
      return () => {
         document.body.style.background = ''
      }
   }, []);

   return (
      <>
         <SEO title="Contact" />
         <ContactForm headline="Vad kan vi hjälpa dig med?" textarea={true} />
      </>
   )
}

export default ContactPage