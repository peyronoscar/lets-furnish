import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.span`
   > * {
      padding: 1.3em 2em;
      display: inline-block;
      border: 0;
      border-radius: 4px;
      font-size: .9rem;
      font-weight: 600;
      letter-spacing: .03em;
   }

   &.dark > * {
      background: #000;
      color: #fff;
   }

   &.light > * {
      background: #fff;
      color: #000;
   }

   &.main > * {
      background: ${props => props.theme.colors.main};
      color: #000;
   }
`

export const Button = (props) => {
   return (
      <ButtonWrapper className={props.btnStyle}>
         {props.children}
      </ButtonWrapper>
   )
}
