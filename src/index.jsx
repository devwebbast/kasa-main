import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//PAGES
import Home from './pages/Home'
import About from './pages/About'
import LogementDetails from './pages/LogementDetails'
import Error from './pages/Error'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logements/:id"  element={<LogementDetails />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)