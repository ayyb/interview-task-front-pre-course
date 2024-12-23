"use client";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div``;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <div><h1>To Do List</h1></div>

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
          <span> 총 3건</span>
          <div>
            <div><input type="checkbox"/>출근하고 비타민 먹기<span>x</span></div>
            <div><input type="checkbox"/>Daily Scrum 작성하기<span>x</span></div>
            <div><input type="checkbox"/>주간회의 참여하기<span>x</span></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TodoUserListPage;
