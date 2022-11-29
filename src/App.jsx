// React and Other Library
import { useState } from 'react'
import reactLogo from './assets/react.svg'

// components
import IntroStop from './components/IntroStop'
import IntroMove from './components/IntroMove'
import InputButton from './components/InputButton'

// CSS
import './style/IntroMove.css'
import './style/IntroStop.css'
import 'bulma/css/bulma.min.css'

// hooks
import './App.css'
import makeStaticLists from './hooks/makeStaticLists'

function App() {
  const [count, setCount] = useState(0)

  // 回答の配列取得
  let GET_URL = 'https://jsonblob.com/api/jsonBlob/1045532953303859200'
  const [quizList, setQuizList] = makeStaticLists(GET_URL,"lists")
  
  const startButtonEvent = (e) =>{
    e.target.style.display='none'
  }

  
  
  const PLAY_LIST_ID = "PL32RkBdibPYUJglOa1xRhjqcJ2Z8Siczs"
  GET_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&key='+import.meta.env.VITE_YOUTUBE_API_KEY+'&playlistId='+PLAY_LIST_ID
  const [musicList, setMusicList] = makeStaticLists(GET_URL,"items")
  console.log(musicList)
  
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
            <IntroMove />
          {/* </figure> */}
        </div>
        <div className="card-content">
          <div className="content">
            <h4>Press the Start button</h4>
            <InputButton 
              buttonType="button"
              buttonId="startButton"
              buttonClass='button is-danger is-light'
              clickEvent={startButtonEvent}
            />
          </div>
        </div>
          <div >
            {/* <div className="buttons">
              <button className="button is-primary" id ="button1"><column is-6>Final Fantasy VII</column></button>
              <button className="button is-primary" id ="button2"><column is-6>ActRaiser</column></button>
            </div>
            <div className="buttons">
              <button className="button is-primary" id ="button3"><column is-6>Zelda</column></button>
              <button className="button is-primary" id ="button4"><column is-6>Diablo II</column></button>
            </div> */}
          </div>
      </div>
    </div>
  )
}

export default App

