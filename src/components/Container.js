import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
   position: relative;
   width: ${props => props.theme.container.width.default };
   max-width: ${props => props.theme.container.maxWidth };
   margin: 0 auto;
   padding: 0 ${props => props.theme.container.padding };
   
   @media ${props => props.theme.breakpoints.sm } {
      width: ${props => props.theme.container.width.sm };
   }
   
   @media ${props => props.theme.breakpoints.md } {
      width: ${props => props.theme.container.width.md };
   }
   
   @media ${props => props.theme.breakpoints.lg } {
      width: ${props => props.theme.container.width.lg };
   }
   
   @media ${props => props.theme.breakpoints.xl } {
      width: ${props => props.theme.container.width.xl };
   }
   
   @media ${props => props.theme.breakpoints.ul } {
      width: ${props => props.theme.container.width.ul };
   }
`

const ContainerInner = styled.div`
   position: relative;
`

export const Container = ({ children }) => {
   return (
      <ContainerWrapper>
         <ContainerInner>
            { children }
         </ContainerInner>
      </ContainerWrapper>
   )
}
