import { useState, useEffect } from "react";
import TodoItem from "./todoItem";

function App(){
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const addTodo = () => {
    if (input.trim()=== "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
      todo.id === id
        ? {...todo, completed: !todo.completed}
        : todo
      )
    );
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("todos");
      if (saved) {
        setTodos(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Failed to load todos", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded){
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  return (
    <div style={{maxWidth: 400, margin: "auto"}}>
      <h1>Todo App</h1>

      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo..."
      />

      <button onClick={addTodo}>Tambah</button>
      
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={()=>deleteTodo(todo.id)}
            onToggle={()=> toggleTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;