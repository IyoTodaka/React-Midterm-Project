import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import IntroStop from './components/IntroStop'
import IntroMove from './components/IntroMove'

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
        <header className="card-header">
          <h2 className="card-header-title">
          Retro Game Background Music
          </h2>
        </header>
        <div className="card-image">
          <figure className="image is-4by3">
            {/* <img src="images/スズメ1.jpg" alt="イメージ" /> */}
            <IntroStop />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <strong>コンテンツ</strong>
            ここにコンテンツを記載します。
          </div>
        </div>
          <div className="buttons">
            <button className="button1 is-primary">Primary</button>
            <button className="button2 is-primary">Primary</button>
            <button className="button3 is-primary">Primary</button>
            <button className="button4 is-primary">Primary</button>
          </div>
      </div>
    </div>
  )
}

export default App
