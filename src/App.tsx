import React, { useState } from "react";
import Input from "./components/Input";
import TodoLists from "./components/TodoLists";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="App mt-3">
      <h1 style={{ textAlign: "center" }}>Task App</h1>
      <h4 style={{ textAlign: "center" }}>Hello there</h4>
      <Input todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoLists todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
