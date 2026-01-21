import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/ProductViewer"
import Showcase from "./components/Showcase"
import { ScrollTrigger } from "gsap/all"
import Performance from "./components/Performance"
import Features from "./components/Features"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger)

function App() {  
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App
