import { useEffect, useState } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function Todo() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // 첫 렌더시 로컬 스토리지에서 가져오기
  useEffect(() => {
    const saved = localStorage.getItem("todoList");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // todos가 변경될 때마다 스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const addTodos = () => {
    const newTodo: Todo = {
      id: text,
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const deleteTodo = (targetTodo: string) => {
    setTodos((prev) => prev.filter((todo) => todo.text !== targetTodo));
  };

  const handleCheck = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.text)}>x</button>
          </li>
        ))}
      </ul>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-half bg-white text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={addTodos}>Add</button>
    </>
  );
}
