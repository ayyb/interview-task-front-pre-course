"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import TodoInput from "../TodoInput";
import TodoTabs from "../TodoTabs";
import TodoList from "../TodoList";

const Container = styled.div``;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  // todo list 상태 관리
  const [todos, setTodos] = useState([
    { id: 1, text: "출근하고 비타민 먹기", completed: false },
    { id: 2, text: "Daily Scrum 작성하기", completed: false },
    { id: 3, text: "주간회의 참여하기", completed: false },
  ]);

  // 검색어 상태 관리
  const [search, setSearch] = useState("");

  //탭 상태 관리
  const [activeTab, setActiveTab] = useState("all");

  const handleInput = (search: string) => {
    //처리가 안된 할일 10개 제한
    const incompleteTodos = todos.filter((todo) => !todo.completed);
    if (incompleteTodos.length >= 10) {
      alert("미완료된 10개 이상의 할일을 등록할 수 없습니다.");
      setSearch(""); //입력값 초기화
      return;
    }
    setTodos([
      ...todos,
      { id: todos.length + 1, text: search, completed: false },
    ]);
    setSearch(""); //입력값 초기화
  };

  const toggleCompleted = (id: number) => {
    const changedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(changedTodos);
    console.log(todos);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "all") {
      return true;
    }
    if (activeTab === "todo") {
      return !todo.completed;
    }
    if (activeTab === "done") {
      return todo.completed;
    }
  });

  return (
    <Container>
      <div>
        <h1>To Do List</h1>
      </div>

      {/* input */}
      <TodoInput
        search={search}
        setSearch={setSearch}
        handleInput={handleInput}
      />
      {/* board */}
      <div>
        {/* tab */}
        <TodoTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* list */}
        <TodoList
          todos={filteredTodos}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      </div>
    </Container>
  );
};

export default TodoUserListPage;
