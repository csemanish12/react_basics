
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './assets/data'

function App() {
  const cardElements = cardData.map(item => {
    return <Card
      key={item.id}
      image_name={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
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
