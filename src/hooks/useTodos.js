import { useState, useEffect } from "react";

const STORAGE_KEY = "todos_app";

export function useTodos(){
    const [todos, setTodos] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            const saved = localStorage.getItem("todos");
            if (saved) {
                setTodos(JSON.parse(saved))
            }
        } catch (error) {
            console.error("failed to load todos:",error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        }
    },[todos, isLoaded]);

    const addTodo = (text) => {
        if (text.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos (
            todos.map((todo) => 
                todo.id === id
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        );
    };

    const editTodo = (id, newText) => {
        if (newText.trim() === "" ) return;

        setTodos((prev) => 
            prev.map((todo) => 
                todo.id === id
                ? {...todo, text: newText}
                : todo
            )
        );
    };

    return {todos, addTodo, deleteTodo, toggleTodo, editTodo};
}

