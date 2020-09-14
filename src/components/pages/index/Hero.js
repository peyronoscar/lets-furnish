import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Button } from '../../'

const HeroWrapper = styled.div`
   background: ${props => props.theme.colors.main};
   padding-top: 8rem;
   text-align: center;
   min-height: 100vh;
   max-height: 500px;
   display: flex;
   flex-wrap: wrap;
   position: relative;

   @media ${props => props.theme.breakpoints.md } {
      max-height: 800px;
      min-height: 0;
      height: 100vh;
      text-align: left;
      align-items: center;
      padding-top: 0rem;
   }
`

const HeroInner = styled.div`
   padding-bottom: 3em;
   z-index: 2;
   position: relative;

   h1{
      margin: 0;
      margin-bottom: .4em;
      font-size: 2rem;
   }

   p{
      margin-bottom: 1.6em;
   }

   @media ${props => props.theme.breakpoints.md } {
      width: 50%;
      padding-bottom: 0;

      h1{
         font-size: 2.6rem;
         line-height: 1.25em;
      }

      p{
         font-size: 1.1rem;
      }
   }
`

const HeroImage = styled.div`
   position: relative;
   width: 100%;
   flex: 0 0 100%;
   overflow: hidden;
   z-index: 1;

   @media ${props => props.theme.breakpoints.md } {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: end;
   }
`

const ImageInner = styled.div`
   width: 84%;
   max-width: 310px;
   margin: 0 auto;
   position: relative;
   margin-bottom: -2rem;

   @media ${props => props.theme.breakpoints.md } {
      max-width: 440px;
      width: 40%;
      margin-right: 10%;
      margin-bottom: 0;
   }

   @media ${props => props.theme.breakpoints.lg } {
      width: 33%;
      max-width: 460px;
      margin-right: 15%;
   }
`


export const Hero = () => {

   const data = useStaticQuery(graphql`
      query MyQuery {
         indexHeroImage: file(relativePath: {eq: "hand.png"}) {
            childImageSharp {
               fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
               }
            }
         }
      }
   `)

   return (
      <HeroWrapper>
         <Container>
            <HeroInner>
               <h1>Publicitet när det<br />är som lättast</h1>
               <p>Det självklara valet för dig som vill exponera ditt varumärke till potentiella kunder och andra intressenter.</p>
               <Button btnStyle="dark">
                  <Link to="/sign-up">Anslut idag</Link>
               </Button>
            </HeroInner>
         </Container>
         <HeroImage>
            <ImageInner>
               <Img fluid={data.indexHeroImage.childImageSharp.fluid} />
            </ImageInner>
         </HeroImage>
      </HeroWrapper>
   )
}
