import React from 'react'
import styled from 'styled-components'

import { Container } from '../../'

const ServicesWrapper = styled.div`
   background: #f2f2f2;
   padding: 3em 0;
`

const Items = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const Item = styled.div`
   flex: 0 0 100%;

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 33.333%;
   }
`

export const Services = () => {
   return (
      <ServicesWrapper>
         <Container>
            <h2>Hur fungerar det?</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, nulla? Consectetur vel est architecto incidunt aliquam molestias magni odio! Tempora iusto corporis placeat esse fugiat rerum sapiente, dolores quae autem!</p>
            <Items>
               <Item>
                  <span>SVG</span>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur reiciendis rerum quam vitae, repellat atque, at voluptatum et.</p>
               </Item>
               <Item>
                  <span>SVG</span>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur reiciendis rerum quam vitae, repellat atque, at voluptatum et.</p>
               </Item>
               <Item>
                  <span>SVG</span>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur reiciendis rerum quam vitae, repellat atque, at voluptatum et.</p>
               </Item>
            </Items>
         </Container>
      </ServicesWrapper>
   )
}
