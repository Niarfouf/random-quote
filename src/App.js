import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from "react"

function App() {
  const url = "https://api.quotable.io/random"
  const [data, setData] = useState([])

  const fetchInfo = async () => {
    const res = await fetch(url)
    const d = await res.json()
    return setData(d)
  }

  useEffect( () => {
    fetchInfo()
  }, [])
//je met un commentaire


  return (
    <div className="container-fluid bg-success h-100 d-flex align-items-center justify-content-center">
      <div id="quote-box" className=" container bg-white w-25 row rounded">
        <h1 id="text" className="text-center text-success p-4 pb-0">{data.content}</h1>
        
        <p id="author" className="text-end text-success">-{data.author}</p>
        <div className="col-sm">
          <a id="tweet-quote" className="btn btn-success" target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        </div>
        <div className="col-sm text-end pb-4">
        <button className="btn btn-success" id="new-quote" onClick={fetchInfo}>New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App
