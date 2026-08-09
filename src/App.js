import './App.css';
import { useState } from 'react';

function App() {

  const [inuputValue, setinputValue] = useState("");
  const [todos, settodos] = useState([]);

  return (

    <div>
      <input value={inuputValue} onChange={(e) => {
        setinputValue(e.target.value)
      }} />

      <button onClick={() => {
        settodos([...todos, inuputValue])
        setinputValue("");

      }}>Add todo</button>

      <ul>
        {todos.map((v, i) => {
          return (
            <li key={i} >{v} <button>delete</button>  <button>Edit</button></li>
          )
        })}

      </ul>

    </div>
  );
}

export default App;
