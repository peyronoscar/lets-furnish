import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// import Img from "gatsby-image"

import { Container, Button } from '../../'

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

const Content = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const Text = styled.div`
   flex: 0 0 100%;

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 50%;
   }

   a{
      margin-top: 1.8em;
   }
`

// const Image = styled.div`
//    position: absolute;
//    bottom: 0;
//    left: 0;
//    right: 0;

//    > div{
//       width: 90%;
//    }
// `

export const Hero = () => {
   // const data = useStaticQuery(graphql`
   //    query indexHeroQuery {
   //       file(relativePath: {eq: "hand.png"}) {
   //          childImageSharp {
   //             fluid{
   //                ...GatsbyImageSharpFluid_noBase64
   //             }
   //          }
   //       }
   //    }
   // `)

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
            </Content>
         </Container>
         {/* <Image>
            <Img fluid={data.file.childImageSharp.fluid} />
         </Image> */}
      </HeroWrapper>
   )
}
