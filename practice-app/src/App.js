import "./App.css";
import Button from "./components/button/button";

function App() {
  // insert fetch logic within function below
  const onButtonClick = () => {
    console.log('clicked!')
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
    </div>
  );
}

export default App;
