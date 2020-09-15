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

   @media ${props => props.theme.breakpoints.md } {
      margin-bottom: 4em;

      h2{
         font-weight: 600;
      }
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
      <ReviewsWrapper id="recensioner">
         <Container>
            <Heading>
               <h2>Lyssna inte på oss. Lyssna på våra kunder.</h2>
               <p>På Let's Furnish värdesätter vi all återkoppling vi kan få från kunder och samarbetspartners. Nedan har du möjligthet att ta del av ett urval av de recensioner som vi kontinuerligt samlar in.</p>
            </Heading>
            <Items>
               <Item>
                  { [...Array(5)].map((e, i) => <Star key={i} />)}
                  <p>Mycket nöjd med rabattkoden jag fick efter mitt husköp. Med ett fåtal klick hittade jag produkter som passade mig.</p>
                  <span>Oscar P. | Helsingborg</span>
               </Item>
               <Item>
                  { [...Array(5)].map((e, i) => <Star key={i} />)}
                  <p>Precis vad jag behövde i rätt tidpunkt. Bra koncept och mycket enkel köpprocess. Tack!</p>
                  <span>Moa J. | Falun</span>
               </Item>
               <Item>
                  { [...Array(5)].map((e, i) => <Star key={i} />)}
                  <p>Utmärkt kundservice när jag hade frågor gällande en intressant rabatt. Trevligt bemötande som ledde till ett lyckat köp.</p>
                  <span>Jesper K. | Borlänge</span>
               </Item>
            </Items>
         </Container>
      </ReviewsWrapper>
   )
}
