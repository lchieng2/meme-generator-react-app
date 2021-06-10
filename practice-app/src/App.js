import React from "react";
import "./App.css";
import Button from "./components/button/button";
import Form from "./components/form/form";
import {useState} from "react"

function App() {
  const [state, setState] = useState({})
  let [rand, setRand] = useState(0)
  let [form, setForm] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  // once user clicks add caption button, toggle to be opposite of state
  // update the name of the button to be true or false
  // render the form

  const onButtonClick = async () => {
    const url = process.env.REACT_APP_API_URL
      try {
        const res = await fetch(url)
        const {data} = await res.json()
        setState(data)
        const random = Math.floor(Math.random()*100)
        setRand(random)
        setImageUrl('')
      } catch(error) {
        console.log(error)
      }
  }
  const onCaptionButtonClick = () => {
    setForm(!form)
    setImageUrl('')
  }

  const updateImageUrlState = (string) => {
    setImageUrl(string)
    console.log(imageUrl)
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "25px" }}>
        Meme Creator App
      </h1>
      <Button
        name="Click me to fetch data!"
        styles={{ margin: "20px auto 10px auto", padding: '10px' }}
        onClick={onButtonClick}
      />
      <div>
        <div>
          {state.memes && state.memes[rand].name}
        </div>
        <img src={state.memes && state.memes[rand].url} alt=""/>
      </div>
      {state.memes ? <Button
        name={form ? "Close caption form" : "Add caption"}
        styles={{ margin: "20px auto 10px auto", padding: '10px' }}
        onClick={onCaptionButtonClick}
      /> : null}
      {form && <Form
        id = {state.memes[rand].id}
        updateImageUrlState={updateImageUrlState}
      />}
      <div>
        {form && <img src={state.memes && imageUrl} alt=""/>}
      </div>
    </div>
  );
}

export default App;
