"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div``;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  // todo list 상태 관리
  const [todos, setTodos] = useState([
    { id: 1, text: "출근하고 비타민 먹기", completed: false },
    { id: 2, text: "Daily Scrum 작성하기", completed: false },
    { id: 3, text: "주간회의 참여하기", completed: false },
  ]);
  return (
    <Container>
      <div>
        <h1>To Do List</h1>
      </div>

      {/* input */}
      <div>
        <input type="text" />
      </div>
      {/* board */}
      <div>
        {/* tab */}
        <div>
          <div>ALL</div>
          <div>TODO</div>
          <div>DONE</div>
        </div>
        {/* list */}
        <div>
          <span> 총 {todos.length}건</span>
          <div>
            {todos.map((todo) => (
              <div
                key={todo.id}
              >
                <input type="checkbox" />
                {todo.text}
                <span>x</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TodoUserListPage;
