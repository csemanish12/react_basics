import './App.css'
import Joke from '../components/Joke'
import jokesData from './assets/jokesData'

function App() {
  const jokesElement = jokesData.map(joke => {
    return <Joke punchline={joke.punchline} setup={joke.setup}/>
  })
  return (
    <div className="App">
      {jokesElement}
    </div>
  )
}

export default App
