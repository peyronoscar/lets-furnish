import React from 'react'
import styled from 'styled-components'

import { Container, Button } from './'

const FormWrapper = styled.div`
   background: ${props => props.theme.colors.light};
   padding: 4em 0;

   @media ${props => props.theme.breakpoints.md } {
      padding: 5.7em 0;
   }
`

const FormHeader = styled.div`
   text-align: center;
   margin-bottom: 3em;

   h1{
      margin: 0;
      font-size: 1.9rem;
      font-weight: 600;
      line-height: 1.17em;
   }

   @media ${props => props.theme.breakpoints.md } {
      text-align: left;
      margin-bottom: 2.5em;

      h1{
         font-size: 2.2rem;
         line-height: 1.2em;
         max-width: 400px;
      }
   }
`

const Form = styled.form`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`

const FormItem = styled.div`
   flex: 0 0 100%;
   padding: 1.3em 0;

   input, label, textarea{
      display: block;
      width: 100%;
   }

   label{
      margin-bottom: .25em;
      font-weight: 500;
   }

   input, textarea{
      border: 0;
      border-bottom: 2px solid #000;
      border-radius: 0;
      background: none;
      padding: .75em 0;
      font-weight: 500;
      resize: none;
      
      :focus{
         outline: none;
         border-bottom: 2px solid ${props => props.theme.colors.main};
      }

      ::placeholder{
         color: #717171;
      }
   }
   
   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 46%;
   }
`

const ButtonWrapper = styled.div`
   flex: 0 0 100%;
   text-align: center;
   margin-top: 2.2em;

   input{
      width: 80%;
      max-width: 320px;
   }

   @media ${props => props.theme.breakpoints.md } {
      &.float-right{
         margin-left: auto;
         text-align: right;
      }

      &.float-left{
         margin-right: auto;
         text-align: left;
      }
   }
`

export const ContactForm = ({ headline, textarea }) => {
   return (
      <FormWrapper>
         <Container>
            <FormHeader>
               <h1>{headline}</h1>
            </FormHeader>
            <Form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
               <input type="hidden" name="contact" value="contact" />
               <FormItem>
                  <label htmlFor="name">Kontaktperson</label>
                  <input type="text" name="name" placeholder="Skriv in ditt namn" />
               </FormItem>
               <FormItem>
                  <label htmlFor="company">Företagsnamn</label>
                  <input type="text" name="company" placeholder="Skriv in ditt företagsnamn" />
               </FormItem>
               <FormItem>
                  <label htmlFor="tel">Telefon</label>
                  <input type="tel" name="tel" placeholder="Skriv in ditt telefonnummer" />
               </FormItem>
               <FormItem>
                  <label htmlFor="email">E-postadress</label>
                  <input type="email" name="email" placeholder="Skriv in din e-postadress" />
               </FormItem>
               { textarea ? (
                  <FormItem>
                     <label htmlFor="message">Meddelande</label>
                     <textarea placeholder="Skriv ditt meddelande" rows="4"></textarea>
                  </ FormItem>
               )
               : null }
               <ButtonWrapper className={ textarea ? 'float-left' : 'float-right' }>
                  <Button btnStyle="dark">
                     <input type="submit" value={ textarea ? 'Skicka meddelande' : 'Skicka uppgifter' }/>
                  </Button>
               </ButtonWrapper>
            </Form>
         </Container>
      </FormWrapper>
   )
}
