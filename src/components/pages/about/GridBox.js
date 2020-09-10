import React, { useContext } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { GlobalContext } from '../../../context/GlobalContext'

import { Container } from '../../'

const GridBoxWrapper = styled.div`

`

const GridBoxInner = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;

   @media ${props => props.theme.breakpoints.md } {
      flex-direction: row-reverse;
   }
`

const Text = styled.div`
   flex: 0 0 100%;

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 46%;
   }
`

const Image = styled.div`
   flex: 0 0 100%;

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 45%;
   }
`

export const GridBox = () => {
   const data = useStaticQuery(graphql`
      query aboutGridQuery {
         file(relativePath: {eq: "thumbnail.png"}) {
            childImageSharp {
               fluid{
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `)

   const { setIsModalOpen } = useContext(GlobalContext);

   return (
      <GridBoxWrapper>
         <Container>
            <GridBoxInner>
               <Text>
                  <p>Perspiciatis autem dolor quidem eveniet, cumque eaque recusandae voluptate nulla sed repellendus dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis autem dolor quidem eveniet, cumque eaque recusandae voluptate nulla sed repellendus dolore.</p>
               </Text>
               <Image>
                  <Img fluid={data.file.childImageSharp.fluid} />
                  <div>
                     <button onClick={() => setIsModalOpen(true)}>Se reklamfilmen</button>
                  </div>
               </Image>
            </GridBoxInner>
         </Container>
      </GridBoxWrapper>
   )
}
