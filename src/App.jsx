import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")
  const [text, setText] = useState("Message")

  const handleClick = (event) => {
    event.target.name === "increment" ? setCount(count+1) : setCount(count-1)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(message)
  }

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{text}</h1>
        <h2>{count}</h2>
        <div className='row'>
          <button name="increment" onClick={handleClick}>Increment</button>
          <button name="decrement" onClick={handleClick}>Decrement</button>
        </div>

        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" placeholder='Your message'/>
          <button type='submit'>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
