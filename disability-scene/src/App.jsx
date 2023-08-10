import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'




function App() {
  const [showSearch, setShowSearch] = useState(false)

  const handleSearchButtonClick = () => {
    console.log('handleSearchButtonClick called')
    setShowSearch(true)
  }


  return (
    <div className='App'>
      <header>
        <Header onSearchButtonClick={handleSearchButtonClick}/>
      </header>

      <main className="app-main">
        <Main showSearch={showSearch} />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
