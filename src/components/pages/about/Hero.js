import React from 'react'
import styled from 'styled-components'

import { Container } from '../../'

const HeroWrapper = styled.div`
   padding-top: 4.8em;

   @media ${props => props.theme.breakpoints.md } {
      padding-top: 8em;
   }
`

const Content = styled.div`
   text-align: center;
   padding-top: 2em;

   span{
      display: block;
      font-size: .95em;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .03em;
      margin-bottom: .8em;
   }

   h1{
      font-size: 1.8em;
      font-weight: 600;
      line-height: 1.3em;
      margin: 0;
   }

   @media ${props => props.theme.breakpoints.md } {
      text-align: left;

      h1{
         font-size: 2.6em;
         max-width: 580px;
      }
   }
`

export const Hero = () => {
   return (
      <HeroWrapper>
         <Container>
            <Content>
               <span>Om Let's Furnish</span>
               <h1>Marknadsföring som<br />ger resultat</h1>
            </Content>
         </Container>
      </HeroWrapper>
   )
}
