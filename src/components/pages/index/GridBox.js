import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { GlobalContext } from '../../../context/GlobalContext'
import { Container, Button } from '../../'

const GridWrapper = styled.div`

`

const GridInner = styled.div`

`

const GridRow = styled.div`
   display: flex;
   flex-wrap: wrap;
`

const Text = styled.div`
   flex: 0 0 100%;
`

const Image = styled.div`
   flex: 0 0 100%;

   .hidden-mobile{
      display: none;
   }

   @media ${props => props.theme.breakpoints.md } {
      .hidden-mobile{
         display: block;
      }
   }

`

export const GridBox = () => {
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
                     <h2>Image</h2>
                  </Image>
               </GridRow>
               <GridRow>
                  <Text>
                     <h2>Ta kontroll och simma lugn</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vitae animi, beatae, velit, fuga corrupti unde aspernatur possimus ipsa id ex alias nulla? Blanditiis distinctio accusantium quaerat eius molestias aspernatur.</p>
                     <Button>
                        <Link to="/about">Läs mer om Let's Furnish</Link>
                     </Button>
                  </Text>
                  <Image>
                     <h2 className="hidden-mobile">Image</h2>
                     <button onClick={() => setIsModalOpen(true)}>Se reklamfilmen</button>
                  </Image>
               </GridRow>
            </GridInner>
         </Container>
      </GridWrapper>
   )
}
