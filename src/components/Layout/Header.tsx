import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="px-8 fixed top-0 left-0 w-full">
      <div className="container mx-auto py-6 flex">
        <a
          className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-red-600 inline"
          href="/"
        >
          STORM
        </a>
        <div className="flex-grow" />
        <div className="flex h-full items-center gap-8">
          <a href="" className="text-2xl font-light">
            Home
          </a>
          <a href="" className="text-2xl font-light">
            Service
          </a>
          <a href="" className="text-2xl font-light">
            Skills
          </a>
          <a href="" className="text-2xl font-light">
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
