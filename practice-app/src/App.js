import React from "react";
import "./App.css";
import Button from "./components/button/button";
import {useState} from "react"

function App() {
  const [state, setState] = useState({})

  const onButtonClick = async () => {
    const url = process.env.REACT_APP_API_URL
      try {
        const res = await fetch(url)
        const {data} = await res.json()
        console.log(data)
        setState(data)
      } catch(error) {
        console.log(error)
      }
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "25px" }}>
        Practice React App
      </h1>
      <Button
        name="Click me to fetch data!"
        styles={{ margin: "20px auto 10px auto", padding: '10px' }}
        onClick={onButtonClick}
      />
      <div>
        {state.memes && state.memes[0].name}
      </div>
      <img src={state.memes && state.memes[0].url}/>
    </div>
  );
}

export default App;
