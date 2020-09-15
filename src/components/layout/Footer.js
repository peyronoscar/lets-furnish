import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Container } from '../'
import { Flag } from '../../icons/Flag'

const FooterWrapper = styled.footer`
   background: ${props => props.theme.colors.main};
   padding: 3.3em 0;

   @media ${props => props.theme.breakpoints.md } {
      padding: 5em 0;
   }

   @media ${props => props.theme.breakpoints.xl } {
      padding: 6em 0;
   }
`

const FooterInner = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: start;

   h6{
      font-weight: 600;
      margin-bottom: .5em;
      font-size: 1.07em;
   }

   a{
      line-height: 2.2em;
      display: block;
   }

   p{
      line-height: 2em;
      display: block;
   }

   @media ${props => props.theme.breakpoints.md } {
      h6{
         font-size: 1em;
      }

      a, p{
         font-size: .95rem;
         line-height: 2.2em;
      }
   }

   @media ${props => props.theme.breakpoints.xl } {
      h6{
         font-size: .97em;
      }

      a, p{
         font-size: .9rem;
         line-height: 2.1em;
      }
      
      a:hover{
         text-decoration: underline;
      }
   }
`

const FooterList = styled.div`
   flex: 0 0 50%;

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 25%;
   }

   @media ${props => props.theme.breakpoints.xl } {
      flex: 0 0 16%;
   }
`

const FooterDescription = styled.div`
   flex: 0 0 100%;
   margin: 3.5rem 0;

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 50%;
      margin: 0;
   }

   @media ${props => props.theme.breakpoints.xl } {
      flex: 0 0 40%;
      padding-right: 1.5em;
   }
`

const FooterDrop = styled.div`
   flex: 0 0 100%;

   h6{
      margin-bottom: 1em;
   }

   .drop-down{
      background: #f5eeeb;
      color: ${props => props.theme.colors.text };
      padding: .8em;
      max-width: 300px;
      width: 100%;
      border-radius: 4px;
      font-weight: 500;

      svg{
         width: 1.7em;
         display: inline-block;
         vertical-align: middle;
         border-radius: 100%;
         margin-right: .8em;
      }

      span{
         display: inline-block;
         vertical-align: middle;
      }
   }

   @media ${props => props.theme.breakpoints.md } {
      margin-top: 3em;

      .drop-down{
         font-size: .9em;
      }
   }
   
   @media ${props => props.theme.breakpoints.xl } {
      flex: 0 0 28%;
      margin-top: 0;
      padding-left: 2em;
   }
`

const Copyright = styled.div`
   background: ${props => props.theme.colors.secondary };
   padding: 1.4em 0;
   text-align: center;

   p{
      font-weight: 400;
   }

   @media ${props => props.theme.breakpoints.md } {
      text-align: left;
      font-size: .9em;
      padding: 1.5em 0;
   }
`

export const Footer = () => {
   const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
               title
               instagram
               facebook
               twitter
            }
          }
        }
      `
    )

   return (
      <>
         <FooterWrapper>
            <Container>
               <FooterInner>
                  <FooterList>
                     <h6>Let's Furnish</h6>
                     <ul>
                        <li><Link to="/">Hem</Link></li>
                        <li><Link to="/om-oss">Om oss</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                        <li><Link to="/anslut">Anslut</Link></li>
                     </ul>
                  </FooterList>
                  <FooterList>
                     <h6>Följ oss</h6>
                     <ul>
                        <li><a href={site.siteMetadata.instagram}>Instagram</a></li>
                        <li><a href={site.siteMetadata.facebook}>Facebook</a></li>
                        <li><a href={site.siteMetadata.twitter}>Twitter</a></li>
                        <li><a href={site.siteMetadata.youtube}>Youtube</a></li>
                     </ul>
                  </FooterList>
                  <FooterDescription>
                     <h6>Om Let's Furnish</h6>
                     <p>Let's Furnish är det självklara valet för dig som vill exponera ditt varumärke till potentiella kunder. Vi samlar relevanta varumärken under ett och samma tak för att på ett effektivt sätt skapa en samlad länk till konsumenter.</p>
                  </FooterDescription>
                  <FooterDrop>
                     <h6>Språk</h6>
                     <div className="drop-down">
                        <Flag />
                        <span>Svenska</span>
                     </div>
                  </FooterDrop>
               </FooterInner>
            </Container>
         </FooterWrapper>
         <Copyright>
            <Container>
               <p>&copy; {site.siteMetadata.title} | {new Date().getFullYear()}</p>
            </Container>
         </Copyright>
      </>
   )
}
