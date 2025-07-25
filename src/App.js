import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Contacto from './pages/Contacto'
import Portfolio from './pages/Portfolio'

const App = () => {
    return (
		<Routes>
			<Route path='/' element={<Index/>} />
			<Route path='/contact' element={<Contacto/>} />
			<Route path='/portfolio' element={<Portfolio/>} />
		</Routes>
    )
}

export default App