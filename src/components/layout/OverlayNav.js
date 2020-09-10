import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { GlobalContext } from '../../context/GlobalContext'

import { Button, Container } from '../'

const navFade = keyframes`
   0% { opacity: 0; }
   100.0% { opacity: 1; }
`;

const OverlayNavWrapper = styled.div`
   display: flex;
   flex-direction: column;
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   background-color: ${props => props.theme.colors.main };
   z-index: 1001;
   width: 100%;
   animation: 180ms linear 0ms ${navFade};
   overflow: scroll;

   @media ${props => props.theme.breakpoints.lg } {
      display: none;
   }
`

const NavList = styled.ul`
   margin: 8.5rem .8rem 4rem .8rem;
   flex: 1;

   a{
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
      padding: .28rem 0;
      display: block;

      &.active, &:hover{
         color: #313131;
      }
   }
`

const NavBtn = styled.div`
   margin: 0 .8rem 3.5rem .8rem;

   a{
      display: block;
      width: 100%;
      text-align: center;
   }
`

export const OverlayNav = () => {
   const { setIsNavOpen } = useContext(GlobalContext);

   return (
      <>
         <OverlayNavWrapper>
            <NavList>
               <Container>
                  <ul>
                     <li>
                        <Link
                        to="/"
                        onClick={() => setIsNavOpen(false)}
                        activeClassName="active"
                        partiallyActive={false}
                        >Hem</Link>
                     </li>
                     <li>
                        <Link
                           to="/contact"
                           onClick={() => setIsNavOpen(false)}
                           activeClassName="active"
                           partiallyActive={true}
                           >Kontakt</Link>
                     </li>
                     <li>
                        <Link
                        to="/#reviews"
                        onClick={() => setIsNavOpen(false)}
                        >Recensioner</Link>
                     </li>
                     <li>
                        <Link
                        to="/about"
                        onClick={() => setIsNavOpen(false)}
                        activeClassName="active"
                        partiallyActive={true}
                        >Om oss</Link>
                     </li>
                     <li>
                        <Link
                        to="/sign-up"
                        onClick={() => setIsNavOpen(false)}
                        activeClassName="active"
                        partiallyActive={true}
                        >Anslut</Link>
                     </li>
                  </ul>
               </Container>
            </NavList>
            <NavBtn>
               <Container>
                  <Button btnStyle="light">
                     <Link
                        to="/sign-up"
                        onClick={() => setIsNavOpen(false)}
                        >Kom igång</Link>
                  </Button>
               </Container>
            </NavBtn>
         </OverlayNavWrapper>
      </>
   )
}