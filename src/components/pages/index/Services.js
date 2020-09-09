import React from 'react'
import styled from 'styled-components'

import { Container } from '../../'
import { Badge } from '../../../icons/Badge'

const ServicesWrapper = styled.div`
   background: #f2f2f2;
   padding: 3em 0;
   text-align: center;
`

const Heading = styled.div`
   margin-bottom: 1em;
`

const Items = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const Item = styled.div`
   flex: 0 0 100%;
   padding: 2em 0;

   svg{
      width: 33%;
      max-width: 120px;
      height: auto;
      margin-bottom: 2em;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 33.333%;
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
