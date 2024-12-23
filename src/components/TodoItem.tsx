import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleCompleted(todo.id)}
        checked={todo.completed}
      />
      {todo.text}
      <span
        onClick={() => deleteTodo(todo.id)}
      >
        x
      </span>
    </div>
  );
};

export default TodoItem;