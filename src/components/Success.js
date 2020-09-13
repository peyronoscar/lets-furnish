import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Container, Button } from './'

const SuccessWrapper = styled.div`
   min-height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background: ${props => props.theme.colors.light};
   text-align: center;

   h1{
      margin: 0;
      margin-bottom: .5em;
      font-size: 2.5em;
   }

   p{
      margin: 0 auto;
      max-width: 700px;
   }

   a{
      margin-top: 3em;
   }

   @media ${props => props.theme.breakpoints.md } {
      h1{
         font-size: 3.5em;
      }
   }
`

export const Success = ({ children }) => {
   return (
      <SuccessWrapper>
         <Container>
            {children}
            <Button btnStyle="dark">
               <Link to="/">Tillbaka till förstasidan</Link>
            </Button>
         </Container>
      </SuccessWrapper>
   )
}
