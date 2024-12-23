import React from "react";
import {
    StyledInput,
  } from "../styles";

interface TodoInputProps {
  search: string;
  setSearch: (value: string) => void;
  handleInput: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ search, setSearch, handleInput }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && search.trim() !== "") {
        handleInput(search.trim());
      setSearch("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 20) {
      alert("20자 이내로 입력해주세요");
      return;
    }
    setSearch(event.target.value);
  };

  return (
    <div>
      <StyledInput 
        type="text"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력해 주세요"
      />
    </div>
  );
};

export default TodoInput;