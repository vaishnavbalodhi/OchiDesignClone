import './App.css'
import About from './components/About'
import Eyes from './components/Eyes'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='text-white bg-zinc-900 min-h-screen'>
        <Navbar />
        <Landing />
        <Marquee />
        <About />
        <Eyes />
      </div>
    </>
  )
}

export default App
