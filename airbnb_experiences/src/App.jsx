
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './assets/data'

function App() {
  const cardElements = cardData.map(item => {
    return <Card
      key={item.id}
      item={item}
    />
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cardElements}
      </section>

    </>
  )
}

export default App
