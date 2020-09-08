import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { GlobalContext } from '../../context/GlobalContext'

import { Video } from './'

const modalFade = keyframes`
   0% { opacity: 0; }
   100.0% { opacity: 1; }
`;

const ModalWrapper = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 1001;
   background-color: rgba(0, 0, 0, 0.7);
   animation: 180ms linear 0ms ${modalFade};
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`

export const Modal = () => {
   const { setIsModalOpen } = useContext(GlobalContext);

   return (
      <ModalWrapper onClick={() => setIsModalOpen(false)}>
         <Video videoSrcURL="https://www.youtube.com/embed/k4MnqaYZIY4" />
      </ModalWrapper>
   )
}
