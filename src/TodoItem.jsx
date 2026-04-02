function TodoItem({ todo, onDelete, onToggle }) {
    return (
        <li>
            <span
                onClick={onToggle}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                }}
            >
                {todo.text}
            </span>

            <button onClick={onDelete}>Hapus</button>
        </li>
    );
}

export default TodoItem;