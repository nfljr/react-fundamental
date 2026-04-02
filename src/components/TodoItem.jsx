import { useState } from "react";

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    return (
        <li
            style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                marginBottom: 8,
            }}
        >
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle}
            />

            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={()=>{
                        onEdit(editText);
                        setIsEditing(false);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onEdit(editText);
                            setIsEditing(false);
                        }
                    }}
                    autoFocus
                />
            ) : (
                <span
                    onDoubleClick={()=>setIsEditing(true)}
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                    }}
                >
                    {todo.text}
                </span>
            )}

            <button onClick={onDelete}>Hapus</button>
        </li>
    );
}

export default TodoItem;