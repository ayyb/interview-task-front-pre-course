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

  //탭 상태 관리
  const [activeTab, setActiveTab] = useState("all"); 

  const handleInput = (event) =>{
    if(event.key === 'Enter'){
      //처리가 안된 할일 10개 제한
      const incompleteTodos = todos.filter((todo) => !todo.completed);
      if(incompleteTodos.length >= 10){
        alert('미완료된 10개 이상의 할일을 등록할 수 없습니다.');
        setSearch(''); //입력값 초기화  
        return;
      }
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

  const toggleCompleted = (id) => {
    const changedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(changedTodos);
    console.log(todos);
  }

  const deleteTodo = (id) => {
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
      <div>
        <input type="text" value={search} onChange={(e)=>handleChange(e)} onKeyDown={handleInput} placeholder="할 일을 입력해 주세요"/>
      </div>
      {/* board */}
      <div>
        {/* tab */}
        <div>
          <button onClick={()=>setActiveTab('all')}>ALL</button>
          <button onClick={()=>setActiveTab('todo')}>TODO</button>
          <button onClick={()=>setActiveTab('done')}>DONE</button>
        </div>
        {/* list */}
        <div>
          <span> 총 {filteredTodos.length}건</span>
          <div>
            {filteredTodos.map((todo) => (
              <div
                key={todo.id}
              >
                <input type="checkbox" onChange={() => toggleCompleted(todo.id)} checked={todo.completed}/>
                {todo.text}
                <span onClick={()=>deleteTodo(todo.id)}>x</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TodoUserListPage;
