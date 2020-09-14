import React from 'react'
import styled from 'styled-components'

import { Container, Thumbnail } from '../../'

const GridBoxWrapper = styled.div`
   padding: 1.8em 0;

   @media ${props => props.theme.breakpoints.md } {
      padding: 3.8em 0;
   }
`

const GridBoxInner = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   text-align: center;

   @media ${props => props.theme.breakpoints.md } {
      flex-direction: row-reverse;
      text-align: left;
   }
`

const Text = styled.div`
   flex: 0 0 100%;

   .hidden-mobile{
      display: block;
      margin-top: 1em;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 46%;

      .hidden-mobile{
         display: none;
      }
   }

   @media ${props => props.theme.breakpoints.lg } {
      .hidden-mobile{
         display: block;
         margin-top: 1em;
      }
   }
`

export const GridBox = () => {

   return (
      <GridBoxWrapper>
         <Container>
            <GridBoxInner>
               <Text>
                  <p>Teamet bakom Let’s Furnish har tillsammans 14 års erfarenhet av marknadsföring inom diverse områden och branscher. Grundarna, NAMN (?), identifierade under 2020 (?) ett påtagligt gap/avstånd mellan kunder på nätet och företag verksamma inom möbelbranschen. Här växte Let’s Furnish koncept fram.
                     <span className="hidden-mobile">
                        Let’s Furnish samlar attraktiva och relevanta varumärken under ett och samma tak för att på ett effektivt sätt skapa en samlad länk till tänkbara konsumenter. Med vårt nätverk hjälper vi dig och din verksamhet att växa.
                     </span>
                  </p>
               </Text>
               <Thumbnail modal={true} />
            </GridBoxInner>
         </Container>
      </GridBoxWrapper>
   )
}
