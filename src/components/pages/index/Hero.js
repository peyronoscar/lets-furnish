import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Container, Button } from '../../'

const HeroWrapper = styled.div`
   background: ${props => props.theme.colors.main};
   padding-top: 6rem;
`

const Content = styled.div`

`

export const Hero = () => {
   return (
      <HeroWrapper>
         <Container>
            <Content>
               <h1>Rabatt till kunder. Done Right.</h1>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, corrupti quia! Saepe architecto numquam tenetur recusandae tempora sunt, laboriosam suscipit nemo ex nobis.</p>
               <Button btnStyle="dark">
                  <Link to="/sign-up">Anslut dig idag</Link>
               </Button>
            </Content>
         </Container>
      </HeroWrapper>
   )
}
