import './App.css'
import Herosection from './components/Herosection.jsx'
import Navbar from './components/navbar.jsx'

function App() {

  return (
    <>
      <div className='navbar-section'>
        <header>
          <nav className='h-[10vh] sm:h-[12vh] flex justify-center items-center'>
              <Navbar />
          </nav>
        </header>

        <main>
          <section className='hero-section'>
            <div>
              <Herosection />
            </div>
          </section>
        </main>

      </div>
    </>
  )
}

export default App
