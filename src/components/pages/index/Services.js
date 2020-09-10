import React from 'react'
import styled from 'styled-components'

import { Container } from '../../'
import { Badge } from '../../../icons/Badge'

const ServicesWrapper = styled.div`
   background: #fbfbfb;
   padding: 3em 0;
   text-align: center;

   @media ${props => props.theme.breakpoints.md } {
      padding: 5em 0;
   }
`

const Heading = styled.div`
   max-width: 900px;
   margin: 0 auto;
   margin-bottom: 2em;

   h2{
      font-size: 2rem;
      margin-bottom: .6em;
   }
`

const Items = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Item = styled.div`
   flex: 0 0 100%;
   padding: 1.6em 1em;

   svg{
      width: 33%;
      max-width: 100px;
      height: auto;
      margin-bottom: 1em;
   }

   p{
      font-size: .96em;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 31%;
   }
`

export const Services = () => {
   return (
      <ServicesWrapper>
         <Container>
            <Heading>
               <h2>Hur fungerar det?</h2>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, nulla? Consectetur vel est architecto incidunt aliquam molestias magni odio! Tempora iusto corporis placeat esse fugiat rerum sapiente, dolores quae autem!</p>
            </Heading>
            <Items>
               <Item>
                  <Badge />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur reiciendis rerum quam vitae, repellat atque, at voluptatum et.</p>
               </Item>
               <Item>
                  <Badge />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur reiciendis rerum quam vitae, repellat atque, at voluptatum et.</p>
               </Item>
               <Item>
                  <Badge />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur reiciendis rerum quam vitae, repellat atque, at voluptatum et.</p>
               </Item>
            </Items>
         </Container>
      </ServicesWrapper>
   )
}
