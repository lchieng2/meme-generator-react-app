import React from "react";
import "./App.css";
import Button from "./components/button/button";
import {useState} from "react"

function App() {
  const [state, setState] = useState({})
  const onButtonClick =  () => {
    const url = process.env.API_URL
      try {
        fetch(url)
          .then(response => response.json())
          .then(data => console.log(data))
        // console.log(res)
        // const data = res.json()
        // console.log(data)
        // setState(data)
        // console.log(state)
      } catch(error) {
        console.log(error)
      }
    //  setState(state += 1)
    // parse data to an object
    // set data to state ^ in the try catch block
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
      {/* <div>
        {state}
      </div> */}
    </div>
  );
}

export default App;
