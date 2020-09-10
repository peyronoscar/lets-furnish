import React from 'react'
import styled from 'styled-components'

import { Container } from '../../'

const HeroWrapper = styled.div`
   padding-top: 6rem;
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
`

export const Hero = () => {
   return (
      <HeroWrapper>
         <Container>
            <Content>
               <span>Om Let's Furnish</span>
               <h1>För dig som vill nå ut till fler kunder</h1>
            </Content>
         </Container>
      </HeroWrapper>
   )
}
