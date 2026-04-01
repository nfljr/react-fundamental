import { useState } from "react";

function App(){
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()=== "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo..."
      />

      <button onClick={addTodo}>Tambah</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={()=> deleteTodo(index)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;