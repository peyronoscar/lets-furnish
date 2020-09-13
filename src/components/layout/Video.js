import React, { useContext } from "react"
import styled from 'styled-components'
import { GlobalContext } from "../../context/GlobalContext"

import { Container } from '../'
import { Cross } from '../../icons/Cross'

const VideoWrapper = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   width: 100%;
`

const VideoBtn = styled.div`
   position: absolute;
   top: -2.4em;
   right: 0;

   button{
      background: #fff;
      padding: .4em;
      border: none;
      border-radius: 50%;

      svg{
         width: 1.3em;
         height: auto;
         display: block;
      }
   }
`

const VideoInner = styled.div`
   padding-top: 56.25%;
   position: relative;

   iframe{
      position: absolute;
      margin-top: .6em;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
   }
`

export const Video = ({ videoSrcURL, videoTitle}) => {
   const { setIsModalOpen } = useContext(GlobalContext);

   return(
      <VideoWrapper>
         <Container>
            <VideoBtn>
               <button onClick={() => setIsModalOpen(false)}>
                  <Cross />
               </button>
            </VideoBtn>
            <VideoInner>
               <iframe
                  src={videoSrcURL}
                  loading="lazy"
                  title={videoTitle}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
               />
            </VideoInner>
         </Container>
      </VideoWrapper>
   )
}