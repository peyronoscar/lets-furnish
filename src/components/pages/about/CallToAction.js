import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Button, Container } from '../../'

const CallWrapper = styled.div`
   padding: 3em 0;
   text-align: center;

   h2{
      font-size: 1.7em;
      font-weight: 600;
      margin-bottom: 1em;
   }

   p{
      margin-bottom: 2em;
   }
`

export const CallToAction = () => {
   return (
      <CallWrapper>
         <Container>
            <h2>Intresserad? Anslut idag!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam pariatur deserunt voluptatibus ea aperiam suscipit quam commodi odio itaque alias sapiente nobis, perferendis, optio eius officia similique neque, praesentium veniam!</p>
            <Button btnStyle="main">
               <Link to="/anslut">Anmäl intresse</Link>
            </Button>
         </Container>
      </CallWrapper>
   )
}
