import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Container, Button, Thumbnail } from '../../'

const GridWrapper = styled.div`
   padding: 2.7em 0;

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
      flex: 0 0 46%;

      h2{
         font-size: 1.9rem;
         width: 70%;
      }
   }
`

export const GridBox = () => {

   return (
      <GridWrapper>
         <Container>
            <GridInner>
               <GridRow>
                  <Text>
                     <h2>För dig som vill nå ut till fler kunder</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat quae nihil neque rerum laboriosam mollitia. Illo vitae dolore sunt distinctio ullam ratione assumenda, eveniet ea in unde hic quidem.</p>
                  </Text>
                  <Thumbnail modal={true} />
               </GridRow>
               <GridRow className="grid-row--2">
                  <Thumbnail className="hidden-mobile" />
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
