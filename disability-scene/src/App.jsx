import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <header>
        <Header />
      </header>

      <main className="app-main">
        <Main />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
