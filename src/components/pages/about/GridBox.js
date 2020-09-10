import React from 'react'
import styled from 'styled-components'

import { Container, Thumbnail } from '../../'

const GridBoxWrapper = styled.div`
   padding: 1.8em 0;

   @media ${props => props.theme.breakpoints.md } {
      padding: 3.8em 0;
   }
`

const GridBoxInner = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   text-align: center;

   @media ${props => props.theme.breakpoints.md } {
      flex-direction: row-reverse;
      text-align: left;
   }
`

const Text = styled.div`
   flex: 0 0 100%;

   .hidden-mobile{
      display: none;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 46%;
   }

   @media ${props => props.theme.breakpoints.lg } {
      .hidden-mobile{
         display: block;
      }
   }
`

export const GridBox = () => {

   return (
      <GridBoxWrapper>
         <Container>
            <GridBoxInner>
               <Text>
                  <p>Perspiciatis autem dolor quidem eveniet, cumque eaque recusandae voluptate nulla sed repellendus dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis autem dolor quidem eveniet, cumque eaque recusandae voluptate nulla sed repellendus.
                     <span className="hidden-mobile">
                        Lorem ipsum dolor sit amet, consecte adiping elit. Sed lacus diam, faucibus nec tincidunt quis, dictum nec enim. Suspendiss. felis elit, varius non consectetur vel, blandit ac massa.
                     </span>
                  </p>
               </Text>
               <Thumbnail modal={true} />
            </GridBoxInner>
         </Container>
      </GridBoxWrapper>
   )
}
