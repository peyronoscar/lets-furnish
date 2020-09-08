import React from 'react'
import styled from 'styled-components'

import { Nav } from './'

const HeaderWrapper = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   width: 100%;
   z-index: 1000;
   transition: background 200ms;
`

export const Header = () => {
   return (
      <HeaderWrapper>
         <Nav />
      </HeaderWrapper>
   )
}
