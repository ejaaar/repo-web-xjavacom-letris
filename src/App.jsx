import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import StudyCase from './pages/StudyCase.jsx'
import Article from './pages/Article.jsx'
import Contact from './pages/Contact.jsx'
import ItWeb from '../src/pages/ItWeb.jsx'
import DigitalMarketing from '../src/pages/DigitalMarketing.jsx'
import Posm from '../src/pages/Posm.jsx'
import Google from './pages/Google.jsx'
import Fif from './pages/FIf.jsx'
import ArticleMedia from './pages/Article-media.jsx'
import ArticleWeb from './pages/Article-web.jsx'
import Media from './pages/Media.jsx'

export default function App() { 
  return (
    <>
      {/* <Navbar/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/study-case" element={<StudyCase />} />
        <Route path="/article" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/ItWeb" element={<ItWeb />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/Posm" element={<Posm />} />
        <Route path="/Google" element={<Google />} />
        <Route path="/Fif" element={<Fif />} />
        <Route path="/ArticleMedia" element={<ArticleMedia />} />
        <Route path="/ArticleWeb" element={<ArticleWeb />} />
      </Routes>

      <Footer/>
    </>
  )
}