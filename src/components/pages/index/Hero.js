import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { Container, Button } from '../../'

const HeroWrapper = styled.div`
   background: ${props => props.theme.colors.main};
   padding-top: 6rem;
   text-align: center;
   min-height: 100vh;
`

const Content = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const Text = styled.div`
   flex: 0 0 100%;
`

const Image = styled.div`
   flex: 0 0 100%;
`

export const Hero = () => {
   const data = useStaticQuery(graphql`
      query indexHeroQuery {
         file(relativePath: {eq: "hand.png"}) {
            childImageSharp {
               fixed{
                  ...GatsbyImageSharpFixed_noBase64
               }
            }
         }
      }
   `)

   return (
      <HeroWrapper>
         <Container>
            <Content>
               <Text>
                  <h1>Rabatt till kunder. Done Right.</h1>
                  <p>Alla pratar om lägre ränta- men ingen pratar om att de sänkts sina kunders effektiva ränta med i snitt 65% på delbetabnngar, kreditkorsfakturor och privatlån.</p>
                  <Button btnStyle="dark">
                     <Link to="/sign-up">Anslut dig idag</Link>
                  </Button>
               </Text>
               <Image>
                  <Img fixed={data.file.childImageSharp.fixed} />
               </Image>
            </Content>
         </Container>
      </HeroWrapper>
   )
}
