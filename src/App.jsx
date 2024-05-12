import './App.css'
import {About, Eyes, Featured, Landing, Marquee, Navbar} from './components/index'

function App() {

  return (
    <>
      <div className='text-zinc-100 bg-zinc-900 min-h-screen'>
        <Navbar />
        <Landing />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
      </div>
    </>
  )
}

export default App
