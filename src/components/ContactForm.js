import React from 'react'
import styled from 'styled-components'

import { Container } from './'

const FormWrapper = styled.div`
   background: ${props => props.theme.colors.light};
   padding: 4em 0;
`

const FormHeader = styled.div`
   text-align: center;
   margin-bottom: 3em;

   h1{
      margin: 0;
      font-size: 1.9rem;
   }
`

const Form = styled.form`
   display: grid;
   grid-template-columns: 1fr;
   grid-gap: 2em 0;

   @media ${props => props.theme.breakpoints.md } {
      grid-template-columns: 1fr 1fr;
      grid-gap: 2em 4em;
   }
`

const FormItem = styled.div`
   input, label{
      display: block;
      width: 100%;
   }

   input{
      border: 0;
      border-bottom: 1px solid #000;
      border-radius: 0;
      background: none;
   }
`
export const ContactForm = () => {
   return (
      <FormWrapper>
         <Container>
            <FormHeader>
               <h1>Bli en av våra samarbetspartners</h1>
            </FormHeader>
            <Form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
               <input type="hidden" name="contact" value="contact" />
               <FormItem>
                  <label htmlFor="firstname">Förnamn</label>
                  <input type="text" name="firstname" placeholder="Skriv in ditt förnamn" />
               </FormItem>
               <FormItem>
                  <label htmlFor="surname">Efternamn</label>
                  <input type="text" name="surname" placeholder="Skriv in ditt efternamn" />
               </FormItem>
               <FormItem>
                  <label htmlFor="tel">Telefon</label>
                  <input type="tel" name="tel" placeholder="Skriv in ditt telefonnummer" />
               </FormItem>
               <FormItem>
                  <label htmlFor="email">E-postadress</label>
                  <input type="email" name="email" placeholder="Skriv in din e-postadress" />
               </FormItem>
               <input type="submit" value="Skicka uppgifter" className="btn btn--dark"/>
            </Form>
         </Container>
      </FormWrapper>
   )
}
