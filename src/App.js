import './App.css';
import { useState } from 'react';

function App() {

  const [inuputValue, setinputValue] = useState("");
  const [todos, settodos] = useState([]);
  const [edit, setedit] = useState(null);

  return (

    <div>
      <input value={inuputValue} onChange={(e) => {
        setinputValue(e.target.value)
      }} />

      <button onClick={() => {

        if (inuputValue.trim() === "") {
          alert("Please Enter a Todo ! ")
          return;
        }

        if (edit === null) {
          settodos([...todos, inuputValue])
          setinputValue("");
        } else {
          const updatedtodos = [...todos];
          updatedtodos[edit] = inuputValue;
          settodos(updatedtodos);
          setinputValue("")
        }

      }}>Add todo</button>

      <ul>
        {todos.map((v, i) => {
          return (
            <li key={i} >{v} <button onClick={() => {
              const deletetodo = todos.filter((todo, index) => {
                return index !== i
              })
              settodos(deletetodo)
            }}>delete</button>

              <button onClick={() => {
                setinputValue(v)
                setedit(i);



              }}>Edit</button></li>
          )
        })}

      </ul>

    </div>
  );
}

export default App;
