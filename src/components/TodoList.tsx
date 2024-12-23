import React from "react";
import TodoItem from "./TodoItem";
import {
  ListWrapper,
} from "../styles";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleCompleted,
  deleteTodo,
}) => {
  return (
    <div>
      <ListWrapper>
        <span> 총 {todos.length}건</span>
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </ListWrapper>
    </div>
  );
};

export default TodoList;
