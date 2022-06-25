import React from "react";
import { Todo } from "../model";
import "./card.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosCard = ({ todo, todos, setTodos }: Props) => {
  const handleDelete = (id: number) => {
    console.log(id);
  };
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    console.log(todo.isDone);
  };
  return (
    <div>
      <div className="card">
        <li className="todos">
          {todo.todo}
          <span style={{ marginLeft: 10 }}>
            <button
              className="delete__button"
              onClick={() => handleDelete(todo.id)}
            >
              x
            </button>
            <button
              className="tick__button"
              onClick={() => handleDone(todo.id)}
            >
              Done
            </button>
          </span>
        </li>
      </div>
    </div>
  );
};

export default TodosCard;
