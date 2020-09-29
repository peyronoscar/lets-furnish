import React from 'react'
import styled from 'styled-components'

import { Container } from '../../'
import { Keys, Phone, Cart } from '../../../icons/'

const ServicesWrapper = styled.div`
   background: #fbfbfb;
   padding: 3em 0;
   text-align: center;

   @media ${props => props.theme.breakpoints.md } {
      padding: 5em 0;
   }
`

const Heading = styled.div`
   max-width: 900px;
   margin: 0 auto;
   margin-bottom: 2em;

   h2{
      font-size: 2rem;
      margin-bottom: .6em;
   }

   @media ${props => props.theme.breakpoints.md } {
      h2{
         font-weight: 600;
      }
   }
`

const Items = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Item = styled.div`
   flex: 0 0 100%;
   padding: 1.6em 1em;

   svg{
      height: 7.5em;
      max-width: 100px;
      margin-bottom: 1em;
   }

   p{
      font-size: .96em;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 31%;
   }
`

export const Services = () => {
   return (
      <ServicesWrapper>
         <Container>
            <Heading>
               <h2>Hur fungerar det?</h2>
               <p>Ett samarbete med Let's Furnish ska för dig som samarbetspartner alltid vara oerhört simpelt. Detta är trots allt grundidén bakom vår affärsmodell. Med detta ledord i baktanke har vi utformat våra effektiva kanaler som gynnar dig som företagare, såväl som dina konsumenter.</p>
            </Heading>
            <Items>
               <Item>
                  <Keys />
                  <p>Efter det att en bostadsaffär genomförts skickas ett sms från mäklarbyrån till kunden samma kväll.</p>
               </Item>
               <Item>
                  <Phone />
                  <p>I meddelandet erbjuder mäklarbyrån exklusiva erbjudanden hos våra samarbetspartners. Här har du möjlighet att synas.</p>
               </Item>
               <Item>
                  <Cart />
                  <p>Med en personlig rabattkod skickas kunden vidare till din webbplats och du har precis fått en potentiell kund.</p>
               </Item>
            </Items>
         </Container>
      </ServicesWrapper>
   )
}
