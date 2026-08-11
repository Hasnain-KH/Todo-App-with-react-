import './App.css';
import { useState } from 'react';

function App() {

  const [inuputValue, setinputValue] = useState("");
  const [todos, settodos] = useState([]);
  const [edit, setedit] = useState(null);

  return (
    <div className="app-container">
      <div className="app-card">
        {/* Header with title and count */}
        <div className="app-header">
          <h1 className="app-title">📋 My Todos</h1>
          {todos.length > 0 && (
            <span className="todo-badge">{todos.length}</span>
          )}
        </div>

        {/* Input area */}
        <div className="input-area">
          <input
            className="todo-input"
            value={inuputValue}
            onChange={(e) => setinputValue(e.target.value)}
            placeholder="What do you need to do?"
          />
          <button
            className={`add-btn ${edit !== null ? 'editing' : ''}`}
            onClick={() => {
              if (inuputValue.trim() === "") {
                alert("Please Enter a Todo ! ");
                return;
              }
              if (edit === null) {
                settodos([...todos, inuputValue]);
                setinputValue("");
              } else {
                const updatedtodos = [...todos];
                updatedtodos[edit] = inuputValue;
                settodos(updatedtodos);
                setinputValue("");
                setedit(null);
              }
            }}
          >
            {edit !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* Todo list */}
        {todos.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">✨</span>
            <p className="empty-text">No todos yet. Add one above!</p>
          </div>
        ) : (
          <ul className="todo-list">
            {todos.map((v, i) => {
              return (
                <li className="todo-item" key={i}>
                  <span className="todo-text">{v}</span>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setinputValue(v);
                        setedit(i);
                      }}
                    >
                      ✏️
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        const deletetodo = todos.filter((todo, index) => {
                          return index !== i;
                        });
                        settodos(deletetodo);
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <button className='clear-all-btn' onClick={() => {

          settodos("");
        }}>Clear All  🗑️</button>

      </div>
    </div>
  );
}

export default App;