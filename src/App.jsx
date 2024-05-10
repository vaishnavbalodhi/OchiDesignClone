import './App.css'
import About from './components/About'
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
      </div>
    </>
  )
}

export default App
