import React from 'react'
import Container from './components/Container'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<div>
          Home
        </div>} ></Route>
        <Route path='about' element={<div>
          About
        </div>} ></Route>
        <Route path='account' element={<div>
          account
        </div>} ></Route>
        <Route path='other' element={<div>
          other
        </div>} ></Route>
        <Route path='next' element={<div>
          next
        </div>} ></Route>
      </Routes>
    </Container>
  )
}

export default App