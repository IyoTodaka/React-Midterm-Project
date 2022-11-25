import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
            <img src="images/スズメ1.jpg" alt="イメージ" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <strong>コンテンツ</strong>
            ここにコンテンツを記載します。
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">フッター1</a>
          <a href="#" className="card-footer-item">フッター2</a>
          <a href="#" className="card-footer-item">フッター3</a>
          <a href="#" className="card-footer-item">フッター4</a>
        </footer>
      </div>
    </div>
  )
}

export default App
