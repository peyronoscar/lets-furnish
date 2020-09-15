import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Button, Container } from '../../'

const CallWrapper = styled.div`
   padding: 4em 0 5em 0;
   text-align: center;

   h2{
      font-size: 1.7em;
      font-weight: 600;
      margin-bottom: 1em;
   }

   p{
      max-width: 800px;
      margin: 0 auto;
      margin-bottom: 2em;
   }

   @media ${props => props.theme.breakpoints.md } {
      h2{
         font-size: 2.1em;
         margin-bottom: .6em;
      }

      padding: 4.5em 0 8em 0;
   }
`

export const CallToAction = () => {
   return (
      <CallWrapper>
         <Container>
            <h2>Intresserad? Anslut idag!</h2>
            <p>Ta chansen och anslut ditt företag till Let's Furnish nätverk redan idag. Skicka in en intresseanmälan så återkommer vi vanligtvis inom 48 timmar.</p>
            <Button btnStyle="main">
               <Link to="/anslut">Anmäl intresse</Link>
            </Button>
         </Container>
      </CallWrapper>
   )
}
