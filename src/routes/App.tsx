import Header from '../components/Header/Header'
import MainArticles from '../components/MainArticles/MainArticles'
import Publicity from '../components/Publicity/Publicity'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main className="container-home">
      <Publicity />
      <MainArticles />
      </main>
    </>
  )
}

export default App
