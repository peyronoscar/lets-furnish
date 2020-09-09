import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { GlobalContext } from '../../../context/GlobalContext'
import { Container, Button } from '../../'

const GridWrapper = styled.div`
   padding: 2.4em 0;

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
      flex: 0 0 48%;
   }
`


const Image = styled.div`
   flex: 0 0 100%;
   margin-top: 2.5em;
   text-align: center;

   button{
      margin-top: 1.2em;
      font-weight: 600;
      font-size: .9em;
      color: ${props => props.theme.colors.main};
   }

   &.hidden-mobile{
      display: none;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 43%;
      margin-top: 0;

      &.hidden-mobile{
         display: block;
      }
   }

`

export const GridBox = () => {

   const data = useStaticQuery(graphql`
      query indexGridQuery {
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
      <GridWrapper>
         <Container>
            <GridInner>
               <GridRow>
                  <Text>
                     <h2>För dig som vill nå ut till fler kunder</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat quae nihil neque rerum laboriosam mollitia. Illo vitae dolore sunt distinctio ullam ratione assumenda, eveniet ea in unde hic quidem.</p>
                  </Text>
                  <Image>
                     <Img fluid={data.file.childImageSharp.fluid} />
                     <div>
                        <button onClick={() => setIsModalOpen(true)}>Se reklamfilmen</button>
                     </div>
                  </Image>
               </GridRow>
               <GridRow className="grid-row--2">
                  <Image className="hidden-mobile">
                     <Img fluid={data.file.childImageSharp.fluid} />
                  </Image>
                  <Text>
                     <h2>Ta kontroll och simma lugn</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vitae animi, beatae, velit, fuga corrupti unde aspernatur possimus ipsa id ex alias nulla? Blanditiis distinctio accusantium quaerat eius molestias aspernatur.</p>
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
