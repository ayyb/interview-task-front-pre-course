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

  // 검색어 상태 관리
  const [search, setSearch] = useState("");

  const handleInput = (event) =>{
    if(event.key === 'Enter'){
      setTodos([...todos, {id: todos.length + 1, text: search, completed: false}]);
      setSearch(''); //입력값 초기화
    }
  }

  const handleChange = (e) =>{
    const inputText = e.target.value;
    if(inputText.length > 20){
      alert('20자 이내로 입력해주세요');
      return;
    }
    setSearch(inputText);
  }
  return (
    <Container>
      <div>
        <h1>To Do List</h1>
      </div>

      {/* input */}
      <div>
        <input type="text" value={search} onChange={(e)=>handleChange(e)} onKeyDown={handleInput} placeholder="할 일을 입력해 주세요"/>
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
