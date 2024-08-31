import NavBar from '../src/Components/NavBar'
import HeroSection from '../src/Components/HeroSection'
import AboutUs from '../src/Components/AboutUs'
import Projects from '../src/Components/Projects'
import ContactMe from './Components/ContactMe/ContactUs'
import Footer from '../src/Components/Footer'
import  "./index.css"
import {Routes , Route , useLocation} from 'react-router-dom'


function App() {
  const location = useLocation();
  return (
    <>
    <div className=" w-[150vh] ml-[25vh] mt-[20px]">
  <NavBar />
  <Routes location={location} key={location.pathname} >
  <Route index element={<HeroSection />}/>
  <Route path='about' element={<AboutUs />}/>
  <Route path='Projects' element={<Projects />}/>
  <Route path='contact' element={<ContactMe />}/>
  </Routes>
  
  </div>
  <Footer />
  </>
  )
}

export default App
