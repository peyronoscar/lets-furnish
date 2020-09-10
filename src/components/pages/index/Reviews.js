import React from 'react'
import styled from 'styled-components'

import { Container } from '../../'
import { Star } from '../../../icons/Star'

const ReviewsWrapper = styled.div`
   padding: 3em 0;
   text-align: center;

   @media ${props => props.theme.breakpoints.md } {
      padding: 7em 0;
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

   @media ${props => props.theme.breakpoints.md } {
      margin-top: 3em;
   }
`

const Item = styled.div`
   flex: 0 0 100%;
   padding: 1.6em 1em;

   svg{
      width: 1.7em;
      max-width: 100px;
      height: auto;
      margin: 0 .23em 1em .23em;
   }

   p{
      font-size: .96em;
   }

   span{
      display: block;
      font-size: .8em;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 1.5em;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 31%;
   }
`

export const Reviews = () => {
   return (
      <ReviewsWrapper>
         <Container>
            <Heading>
               <h2>Hör från våra samarbetspartners</h2>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, nulla? Consectetur vel est architecto incidunt aliquam molestias magni odio! Tempora iusto corporis placeat esse fugiat rerum sapiente, dolores quae autem!</p>
            </Heading>
            <Items>
               <Item>
                  { [...Array(5)].map((e, i) => <Star />)}
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur reiciendis rerum quam vitae, repellat atque, at voluptatum et.</p>
                  <span>Foundly Group</span>
               </Item>
               <Item>
                  { [...Array(5)].map((e, i) => <Star />)}
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur reiciendis rerum quam vitae, repellat atque, at voluptatum et.</p>
                  <span>Foundly Group</span>
               </Item>
               <Item>
                  { [...Array(5)].map((e, i) => <Star />)}
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque consectetur reiciendis rerum quam vitae, repellat atque, at voluptatum et.</p>
                  <span>Foundly Group</span>
               </Item>
            </Items>
         </Container>
      </ReviewsWrapper>
   )
}
