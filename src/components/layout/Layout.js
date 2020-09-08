import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../context/GlobalContext'

import { Header, Footer, Modal } from './'

const LayoutWrapper = styled.div`
   display: flex;
   min-height: 100vh;
   flex-direction: column;

   main{
      flex: 1;
   }
`

export const Layout = ({children}) => {
   const { globalState } = useContext(GlobalContext);

   useEffect(() => {
      if(globalState.isScollLocked){
         document.body.style.overflow = 'hidden';
      }else{
         document.body.style.overflow = 'scroll';
      }
   }, [globalState.isScollLocked]);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if(window.scrollY > 0){
            document.querySelector('header').style.background = '#fff';
         }else{
            document.querySelector('header').style.background = '';
         }
      });

      return () => {
         window.removeEventListener('scroll');
      }
   }, [])

   return (
      <LayoutWrapper>
         <Header />
         {globalState.isModalOpen && <Modal />}
         <main>
            {children}
         </main>
         <Footer />
      </LayoutWrapper>
   )
}
