import "./TodoList.css";
import { useState } from "react";
import { useEffect } from "react";

const todoList = [
  // { id: 1, task: "첫번째할일", isDone: false },
  // { id: 2, task: "두번째할일", isDone: true },
  // { id: 3, task: "세번째할일", isDone: false },
];

function TodoItem({ todo, isDoneToggle, deleteTodo }) {
  return (
    <li className={todo.isDone ? "completed" : ""}>
      <input
        type="checkbox"
        defaultChecked={todo.isDone}
        onChange={() => {
          isDoneToggle(todo.id);
        }}
      />
      <span>{todo.task}</span>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        ✖️
      </button>
    </li>
  );
}

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [todoValue, setTodoValue] = useState("");
  const addTodo = () => {
    if (!todoValue.trim()) return;

    const newTodos = [
      ...todos,
      { id: Date.now(), task: todoValue.trim(), isDone: false },
    ];
    console.log(Date.now());
    //2. 기존할일을 새로운 할일로 바꾸기
    setTodos(newTodos);
    setTodoValue("");
  };

  // 토글 함수
  function isDoneToggle(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(newTodos);
  }

  // 할 일 삭제 함수
  function deleteTodo(id) {
    console.log(id);
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>📝 Todo List</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul className="todo-list">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            isDoneToggle={isDoneToggle}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
