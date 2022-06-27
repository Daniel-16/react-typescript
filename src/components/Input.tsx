import React, { useRef } from "react";
import { Todo } from "../model";

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
    <div className="container">
      <form onSubmit={handleAdd}>
        <div className="input-group">
          <input
            ref={inputRef}
            type="text"
            value={todo}
            onChange={handleInput}
            placeholder="Enter a task"
            className="form-control w-70"
          />
          <button type="submit" className="btn btn-primary">
            Go
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
