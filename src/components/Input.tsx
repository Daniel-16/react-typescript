import React, { useRef } from "react";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Input = ({ todo, setTodo, todos, setTodos }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    inputRef.current?.blur();
  };
  //   console.log(todos);
  return (
    <div>
      <form style={{ textAlign: "center", padding: "10" }} onSubmit={handleAdd}>
        <input
          ref={inputRef}
          type="text"
          value={todo}
          onChange={handleInput}
          placeholder="Enter a task"
          className="input"
        />
        <button type="submit" className="submit__button">
          Go
        </button>
      </form>
    </div>
  );
};

export default Input;
