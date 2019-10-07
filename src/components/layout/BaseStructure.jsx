import React, { useState } from 'react'
import { Layout } from 'antd'
import SideMenu from './SideMenu'
import Header from './Header'

const BaseStructure = ({ children }) => {
  const [visible, setVisible] = useState(true)

  const toggleVissible = () => {
    setVisible(!visible)
  }

  return (
    <Layout>
      <SideMenu visible={visible}/>
      <Layout>
        <Header menuVisible={visible} onToggle={toggleVissible} />
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

export default BaseStructure