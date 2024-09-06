import React from 'react'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NavBar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'

export default function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/create' element={<CreatePage/>} />
      </Routes>
    </Box>
  )
}
