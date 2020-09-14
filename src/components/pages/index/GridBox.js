import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Container, Button, Thumbnail } from '../../'

const GridWrapper = styled.div`
   padding: 2.7em 0;

   @media ${props => props.theme.breakpoints.md } {
      padding: 2.7em 0;
   }
`

const GridInner = styled.div`
   text-align: center;
`

const GridRow = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row-reverse;
   justify-content: space-between;
   align-items: center;
   padding: 1.25em 0;

   @media ${props => props.theme.breakpoints.md } {
      text-align: left;
      padding: 3.2em 0;
   }
`

const Text = styled.div`
   padding: 0 .5em;
   flex: 0 0 100%;

   h2{
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.5em;
      margin-bottom: .4em;
   }

   a{
      margin-top: 2em;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 46%;

      h2{
         font-size: 1.9rem;
         line-height: 1.35em;
         width: 70%;
      }
   }
`

export const GridBox = () => {

   return (
      <GridWrapper>
         <Container>
            <GridInner>
               <GridRow>
                  <Text>
                     <h2>För dig som vill nå ut till fler kunder</h2>
                     <p>Let’s Furnish samlar attraktiva och relevanta varumärken under ett och samma tak för att på ett effektivt sätt skapa en samlad länk till tänkbara konsumenter. Med vårt nätverk hjälper vi dig och din verksamhet att växa.</p>
                  </Text>
                  <Thumbnail modal={true} />
               </GridRow>
               <GridRow className="grid-row--2">
                  <Thumbnail className="hidden-mobile" />
                  <Text>
                     <h2>Så att ni kan fokusera på det ni gör bra</h2>
                     <p>Vårt koncept bygger på tanken av att reducera avståndet mellan duktiga företagare och den önskade målgruppen. Genom ett i grunden simpelt koncept strävar vi efter att erbjuda kunder marknadsföring av betydelse och därigenom skapa försäljning för ditt bolag.</p>
                     <Button btnStyle="main">
                        <Link to="/about">Läs mer om Let's Furnish</Link>
                     </Button>
                  </Text>
               </GridRow>
            </GridInner>
         </Container>
      </GridWrapper>
   )
}
