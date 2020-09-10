import React, { useEffect } from 'react'
import Theme from '../themes/theme'
import { SEO, ContactForm } from "../components/"

const SignUpPage = () => {
   useEffect(() => {
      document.body.style.background = Theme.colors.light;
      return () => {
         document.body.style.background = ''
      }
   }, []);

   return (
      <>
         <SEO title="Sign Up" />
         <ContactForm headline="Bli en av våra samarbetspartners" />
      </>
   )
}

export default SignUpPage