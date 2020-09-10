import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Container, Button } from '../../'

const BannerWrapper = styled.div`
   background: ${props => props.theme.colors.green};
   padding: 4.5em 0;
   text-align: center;
   
   @media ${props => props.theme.breakpoints.md } {
      text-align: left;
      padding: 6.5em 0;
   }
`

const BannerInner = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Heading = styled.div`
   flex: 0 0 100%;

   h2{
      color: #fff;
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.5em;
      margin-bottom: .7em;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 47%;

      h2{
         font-size: 2.3rem;
         line-height: 1.4em;
      }
   }
`

const Text = styled.div`
   flex: 0 0 100%;

   p{
      color: #fff;
      margin-bottom: 2.5em;
      font-weight: 500;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 50%;
   }
`

export const Banner = () => {
   return (
      <BannerWrapper>
         <Container>
            <BannerInner>
               <Heading>
                  <h2>Vi ger dig chansen att synas</h2>
               </Heading>
               <Text>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi id quam quasi est, sit voluptatum eius vitae aperiam qui nostrum ipsam! Aperiam harum iure aspernatur est in beatae cumque numquam?</p>
                  <Button btnStyle="light">
                     <Link to="/about">Läs mer om Let's Furnish</Link>
                  </Button>
               </Text>
            </BannerInner>
         </Container>
      </BannerWrapper>
   )
}
