import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
   background: ${props => props.theme.colors.main};
   padding-top: 6rem;
   text-align: center;
   min-height: 100vh;
   display: flex;

   @media ${props => props.theme.breakpoints.md } {
      text-align: left;
      align-items: center;
      padding-bottom: 5em;
   }
`

export const Hero = () => {

   return (
      <HeroWrapper></HeroWrapper>
   )
}
