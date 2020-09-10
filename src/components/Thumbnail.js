import React, { useContext } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { GlobalContext } from '../context/GlobalContext'

const ThumbnailWrapper = styled.div`
   flex: 0 0 100%;
   margin-top: 2.5em;
   text-align: center;

   button{
      margin-top: 1.2em;
      font-weight: 600;
      font-size: .9em;
      color: ${props => props.theme.colors.main};
   }

   &.hidden-mobile{
      display: none;
   }

   @media ${props => props.theme.breakpoints.md } {
      flex: 0 0 50%;
      margin-top: 0;

      &.hidden-mobile{
         display: block;
      }
   }

   @media ${props => props.theme.breakpoints.lg } {
      flex: 0 0 46%;
   }
`

export const Thumbnail = ({ className, modal }) => {
   const data = useStaticQuery(graphql`
      query indexGridQuery {
         file(relativePath: {eq: "thumbnail.png"}) {
            childImageSharp {
               fluid{
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `)

   const { setIsModalOpen } = useContext(GlobalContext);

   return (
      <ThumbnailWrapper className={className}>
         <Img fluid={data.file.childImageSharp.fluid} />
         { modal ? (
            <div>
               <button onClick={() => setIsModalOpen(true)}>Se reklamfilmen</button>
            </div>
         ) : null }
      </ThumbnailWrapper>
   )
}
