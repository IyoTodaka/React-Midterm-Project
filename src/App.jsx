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

const PLAY_LIST_ID = "PL32RkBdibPYUJglOa1xRhjqcJ2Z8Siczs"
  const getPlayListUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&key='+import.meta.env.VITE_YOUTUBE_API_KEY+'&playlistId='+PLAY_LIST_ID
let playList
  axios.get(getPlayListUrl).then(({data})=>{
    playList =data.items;
    
    console.log(playList);
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
           
          </div>
        </div>
          <div >
            <div className="buttons">
              <button className="button is-primary" id ="button1">Final Fantasy VII</button>
              <button className="button is-primary" id ="button2">ActRaiser</button>
            </div>
            <div className="buttons">
              <button className="button is-primary" id ="button3">Zelda</button>
              <button className="button is-primary" id ="button4">Diablo II</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App

