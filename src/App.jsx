import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import IntroStop from './components/IntroStop'
import IntroMove from './components/IntroMove'
import './style/IntroMove.css'
import './style/IntroStop.css'
import 'bulma/css/bulma.min.css'

function App() {
  const [count, setCount] = useState(0)

  const GET_URL = 'https://jsonblob.com/api/jsonBlob/1045532953303859200'
  let quizList;
  axios.get(GET_URL).then(({data})=>{
  quizList =data.lists;
  console.log(quizList);

})

  return (
    <div className="App">
      <div className = "card">
        {/* <header className="card-header"> */}
          <h2 className="title">
          Retro Game Background Music
          </h2>
        {/* </header> */}
        <div className="card-image">
          {/* <figure className="image is-4by3"> */}
            {/* <img src="images/スズメ1.jpg" alt="イメージ" /> */}
            <IntroStop />
          {/* </figure> */}
        </div>
        <div className="card-content">
          <div className="content">
            <h4>Press the Start button</h4>
            <button className='button is-danger is-light' id='start-button'>
              <strong>START</strong>
            </button>
          </div>
        </div>
          <div >
            <div className="buttons">
              <button className="button is-primary" id ="button1">PrimaryPrimaryPrimaryPrimary</button>
              <button className="button is-primary" id ="button2">PrimaryPrimaryPrimaryPrimary</button>
            </div>
            <div className="buttons">
              <button className="button is-primary" id ="button3">Primary</button>
              <button className="button is-primary" id ="button4">PrimaryPrimaryPrimaryPrimary</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
