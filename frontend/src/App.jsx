import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App