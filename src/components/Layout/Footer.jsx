import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <StFooterWrap>
      <StFooterContents>Copyright 2023. J & H</StFooterContents>
      <StFooterContents>All rights reserved.</StFooterContents>
    </StFooterWrap>
  )
}

export default Footer

const StFooterWrap = styled.div`
    padding: 20px;
    text-align: center;
`
const StFooterContents = styled.p`
    color: gray;
`