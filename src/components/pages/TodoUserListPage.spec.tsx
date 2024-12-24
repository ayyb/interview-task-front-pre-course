import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "../TodoInput"; // TodoInput 컴포넌트
import TodoItem from "../TodoItem";
import TodoTabs from "../TodoTabs";
import TodoUserListPage from "../pages/TodoUserListPage";
import "@testing-library/jest-dom";

// describe("테스트 샘플", () => {
//   it("sample", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

/*테스트 확인 리스트
1. 할일 입력
2. 할일 항목
3. 탭 
4. 할일 추가 및 렌더링
*/

//1. 할일 입력 컴포넌트 확인
describe("TodoInput 컴포넌트 테스트", () => {
  test("입력 필드 렌더링 여부 확인 및 setSearch값 변경확인", () => {
    const setSearch = jest.fn();
    const handleInput = jest.fn();

    render(
      <TodoInput search="" setSearch={setSearch} handleInput={handleInput} />
    );

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Test Task" } });
    expect(setSearch).toHaveBeenCalledWith("Test Task"); //호출된 인자가 맞는지 확인
  });

  test("엔터 키 입력시 입력함수 호출 확인 및 값 초기화 확인", () => {
    const setSearch = jest.fn();
    const handleInput = jest.fn();

    render(
      <TodoInput
        search="Task"
        setSearch={setSearch}
        handleInput={handleInput}
      />
    );

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(handleInput).toHaveBeenCalledWith("Task");
    expect(setSearch).toHaveBeenCalledWith(""); // 값 초기화 확인
  });

  test("20글자 초과시 Alert 표시", () => {
    const setSearch = jest.fn();
    const handleInput = jest.fn();
    window.alert = jest.fn();

    render(
      <TodoInput search="" setSearch={setSearch} handleInput={handleInput} />
    );

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "a".repeat(21) } });

    expect(window.alert).toHaveBeenCalledWith("20자 이내로 입력해주세요");
  });
});

//2. 할일 항목 컴포넌트 확인
describe("TodoItem 컴포넌트 테스트", () => {
  test("할일 항목 렌더링 확인", () => {
    const todo = { id: 1, text: "Test Task", completed: false };
    const toggleCompleted = jest.fn();
    const deleteTodo = jest.fn();

    render(
      <TodoItem
        todo={todo}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    );

    const text = screen.getByText("Test Task");
    expect(text).toBeInTheDocument(); //be check
  });

  test("완료 svg 클릭시 토글 여부 확인", () => {
    const todo = { id: 1, text: "Test Task", completed: false };
    const toggleCompleted = jest.fn();

    render(
      <TodoItem
        todo={todo}
        toggleCompleted={toggleCompleted}
        deleteTodo={jest.fn()}
      />
    );

    const toggleIcon = screen.getByRole("img", { hidden: true }); // SVG 클릭
    fireEvent.click(toggleIcon);

    expect(toggleCompleted).toHaveBeenCalledWith(1);
  });

  test("삭제버튼 클릭 확인", () => {
    const todo = { id: 1, text: "Test Task", completed: false };
    const deleteTodo = jest.fn();

    render(
      <TodoItem
        todo={todo}
        toggleCompleted={jest.fn()}
        deleteTodo={deleteTodo}
      />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(deleteTodo).toHaveBeenCalledWith(1);
  });
});

//3. 탭 컴포넌트 확인
describe("TodoTabs 컴포넌트 테스트", () => {
  test("탭 렌더링 및 활성 탭 변동 확인", () => {
    const setActiveTab = jest.fn();

    render(<TodoTabs activeTab="all" setActiveTab={setActiveTab} />);

    const allTab = screen.getByText("All");
    const todoTab = screen.getByText("To Do");

    fireEvent.click(todoTab);
    expect(setActiveTab).toHaveBeenCalledWith("todo");

    fireEvent.click(allTab);
    expect(setActiveTab).toHaveBeenCalledWith("all");
  });
});

//4. 할일 추가 및 렌더링 확인
describe("TodoUserListPage 페이지 테스트", () => {
  test("전체항목 렌더링 및 입력 테스트", () => {
    render(<TodoUserListPage />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });
});
