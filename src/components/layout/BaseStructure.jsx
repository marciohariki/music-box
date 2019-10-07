import React from 'react'
import { Layout } from 'antd'
import Menu from './Menu'
import { shape, string } from 'prop-types'

const BaseStructure = ({ profile, children }) => {
  return (
    <Layout>
      <Menu profile={profile}/>
      <Layout className="layout">
        <Layout.Content  style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280,
        }}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

BaseStructure.propTypes = {
  profile: shape({
    name: string,
    imgUrl: string
  })
}

export default BaseStructure