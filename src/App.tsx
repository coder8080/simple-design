import Homepage from './pages/homepage/homepage.component'
import AboutUs from './pages/about-us/about-us.component'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
