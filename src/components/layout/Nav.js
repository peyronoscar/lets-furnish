import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GlobalContext } from '../../context/GlobalContext'

import { Container } from '../'
import { Logo } from '../../icons/Logo'
import { OverlayNav } from './'

const NavWrapper = styled.nav`
   @media ${props => props.theme.breakpoints.lg } {
      padding: 1.3em 0;
   }
`

const NavInner = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   .nav-logo{
      svg{
         height: 19px;
         display: block;
      }
   }

   .nav-links--desktop{
      display: none;

      ul{
         list-style: none;
         display: flex;
      }

      li:last-child a{
         margin-left: 1.3em;
      }

      a{
         padding: .6em 1.3em;
         border-radius: 4px;
         font-size: .95em;
         font-weight: 500;
      }
   }

   @media ${props => props.theme.breakpoints.lg } {
      .nav-logo{
         svg{
            height: 24px;
            display: block;
         }
      }

      .nav-links--desktop{
         display: flex;
      }
   }
`

const NavBurger = styled.div`
   z-index: 1002;
   position: relative;

   button{
      display: block;
      padding: ${props => props.theme.container.padding };
      margin-right: -${props => props.theme.container.padding };

      > div{
         width: 1.6em;
         height: 2px;
         border-radius: 4px;
         background: #000;
         transition: opacity 500ms, background 300ms, height 300ms;
      }

      .line-2{
         margin: 5px 0;
      }

      &.active{
         > div{
            background: #fff;
         }

         .line-1, .line-3{
            opacity: 0;
         }

         .line-2{
            height: 3px;
         }
      }
   }

   @media ${props => props.theme.breakpoints.lg } {
      display: none;
   }
`

export const Nav = () => {

   const { globalState, setIsNavOpen } = useContext(GlobalContext);

   return (
      <NavWrapper>
         <Container>
            <NavInner>
               <div className="nav-logo">
                  <Link to="/">
                     <Logo />
                  </Link>
               </div>
               <NavBurger>
                  <button onClick={() => setIsNavOpen(!globalState.isNavOpen)} className={globalState.isNavOpen ? 'active' : null}>
                     <div className="line-1"></div>
                     <div className="line-2"></div>
                     <div className="line-3"></div>
                  </button>
               </NavBurger>
               <div className="nav-links--desktop">
                  <ul >
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/about">About</Link>
                     </li>
                     <li>
                        <Link to="/contact">Contact</Link>
                     </li>
                     <li>
                        <Link to="/sign-up" className="btn--dark-border">Kom igång</Link>
                     </li>
                  </ul>
               </div>
               {globalState.isNavOpen && <OverlayNav />}
            </NavInner>
         </Container>
      </NavWrapper>
   )
}
