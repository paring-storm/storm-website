import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="px-8">{children}</main>
    </div>
  )
}

export default Layout
