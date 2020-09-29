import React, { useContext, useEffect } from "react"
import styled from 'styled-components'
import { GlobalContext } from "../../context/GlobalContext"

import { Container } from '../'
import { Cross } from '../../icons/Cross'

const VideoWrapper = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   width: 100%;
   padding-top: 2em;
`

const VideoBtn = styled.div`
   position: absolute;
   top: -3em;
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
   position: relative;
`

export const Video = ({ videoSrcURL, videoTitle}) => {
   const { setIsModalOpen } = useContext(GlobalContext);

   useEffect(() => {
      const script1 = document.createElement("script");
      const script2 = document.createElement("script");

      script1.src = "https://fast.wistia.com/embed/medias/r1cl9z8swu.jsonp";
      script1.async = true;

      script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
      script2.async = true;

      document.body.appendChild(script1);
      document.body.appendChild(script2);
   }, [])

   return(
      <VideoWrapper>
         <Container>
            <VideoBtn>
               <button onClick={() => setIsModalOpen(false)}>
                  <Cross />
               </button>
            </VideoBtn>
            <VideoInner>
               <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <div className="wistia_responsive_wrapper" style={{ height:"100%", left: 0, position: "absolute", top: 0, width: "100%" }}>
                     <div className="wistia_embed wistia_async_r1cl9z8swu videoFoam=true" style={{ height: "100%", position: "relative",width: "100%" }}>
                        <div className="wistia_swatch" style={{ height: "100%", left: 0, overflow: "hidden", position: "absolute", top: 0, width: "100%" }}>
                           <img src="https://fast.wistia.com/embed/medias/r1cl9z8swu/swatch" style={{ height: "100%", objectFit: "contain", width: "100%" }} alt="" aria-hidden="true"/>
                        </div>
                     </div>
                  </div>
               </div>
            </VideoInner>
         </Container>
      </VideoWrapper>
   )
}