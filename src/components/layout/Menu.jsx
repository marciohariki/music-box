import React from 'react'
import PropTypes, { shape } from 'prop-types'
import styled from 'styled-components'
import { Layout, Menu as MenuAntd } from 'antd'
import MenuProfile from './MenuProfile'

const { Header } = Layout

const Menu = ({ profile }) => {
  const renderProfile = () => {
    if (profile) {
      return <MenuProfile {...profile} />
    }
  }

  return (
    <S.Header>
      <S.MenuAntd
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <MenuAntd.Item key="1">nav 1</MenuAntd.Item>
        <MenuAntd.Item key="2">nav 2</MenuAntd.Item>
        <MenuAntd.Item key="3">nav 3</MenuAntd.Item>
      </S.MenuAntd>
      {renderProfile()}
    </S.Header>
  )
}

Menu.propTypes = {
  profile: PropTypes.shape({
    birthdate: PropTypes.string,
    country: PropTypes.string,
    display_name: PropTypes.string,
    email: PropTypes.string,
    followers: PropTypes.shape({
      href: PropTypes.string,
      total: PropTypes.number
    }),
    images: PropTypes.arrayOf(shape({
      height: PropTypes.number,
      url: PropTypes.string
    }))
  })
}

export default Menu

const S = {
  Header: styled(Header)`
    display: flex;
  `,
  MenuAntd: styled(MenuAntd)`
    margin-right: auto;
    line-height: 64px;
  `
}