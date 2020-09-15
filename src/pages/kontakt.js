import React, { useEffect } from 'react'
import styled from 'styled-components'
import Theme from '../themes/theme'
import { SEO, ContactForm } from "../components/"

const FormWrapper = styled.div`
   padding: 3em 0 1em 0;

   @media ${props => props.theme.breakpoints.md } {
      padding: 4em 0 1em 0;
   }
`

const ContactPage = () => {
   useEffect(() => {
      document.body.style.background = Theme.colors.light;
      return () => {
         document.body.style.background = ''
      }
   }, []);

   return (
      <>
         <SEO title="Kontakt" />
         <FormWrapper>
            <ContactForm headline="Vad kan vi hjälpa dig med?" textarea={true} />
         </FormWrapper>
      </>
   )
}

export default ContactPage