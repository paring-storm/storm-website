import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './views/Main'
import Layout from './components/Layout'

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>
  )
}

export default App
