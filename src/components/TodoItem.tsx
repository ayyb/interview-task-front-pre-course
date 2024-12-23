import React from "react";
import {
  ListItem,
} from "../styles";

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

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleCompleted,
  deleteTodo,
}) => {
  return (
    <div>
      <ListItem>
        {/* <input
          type="checkbox"
          onChange={() => toggleCompleted(todo.id)}
          checked={todo.completed}
        /> */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => toggleCompleted(todo.id)}
        >
       {todo.completed ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.8483 5.65152C21.317 6.12015 21.317 6.87995 20.8483 7.34858L9.84834 18.3486C9.37972 18.8172 8.61992 18.8172 8.15129 18.3486L3.65128 13.8486C3.18265 13.3799 3.18265 12.6202 3.65128 12.1515C4.1199 11.6829 4.8797 11.6829 5.34833 12.1515L8.99981 15.803L19.1513 5.65152C19.6199 5.18289 20.3797 5.18289 20.8483 5.65152Z"
            fill="black" // 체크된 상태
          />
        ) : (
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="gray"
            strokeWidth="1"
            fill="none" // 체크되지 않은 상태
          />
        )}
        </svg>

        <span>
          <span className="text">{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="grey"
              />
            </svg>
          </button>
        </span>
      </ListItem>
    </div>
  );
};

export default TodoItem;
