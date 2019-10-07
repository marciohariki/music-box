import React from 'react'
import { Icon, Layout } from 'antd'
import styled from 'styled-components'


const { Header: HeaderAntD } = Layout

const Header = ({ menuVisible, onToggle }) => {
  return (
    <HeaderWrapper>
      <Icon
        className="trigger"
        type={menuVisible ? 'menu-unfold' : 'menu-fold'}
        onClick={onToggle}
      />
      <Title>Music Box</Title>
    </HeaderWrapper>
  )
}

export default Header

const Title = styled.h1`
  display: flex;
  margin-left: 20px;
`

const HeaderWrapper = styled(HeaderAntD)`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px;
`

