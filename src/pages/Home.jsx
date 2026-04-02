import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import TodoItem from "../components/TodoItem";

function Home() {
  const [input, setInput] = useState("");
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo} = useTodos();

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={()=> {
        addTodo(input);
        setInput("");
      }}>
            Tambah
        </button>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            onToggle={() => toggleTodo(todo.id)}
            onEdit={(newText) => editTodo(todo.id, newText)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;