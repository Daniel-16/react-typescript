import React, { useState } from "react";
import { Todo } from "../model";
import "./card.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosCard = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDelete = (id: number) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
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
          {todo.isDone ? (
            <>
              <br />
              <s>{todo.todo}</s>
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
                  {todo.isDone ? "Undone" : "Done"}
                </button>
                <button
                  className="edit__button"
                  onClick={() => {
                    // if (!edit && !todo.isDone) {
                    setEdit(!edit);
                    // }
                  }}
                >
                  Edit
                </button>
              </span>
            </>
          ) : (
            <>
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
                <button
                  className="edit__button"
                  onClick={() => {
                    // if (!edit && !todo.isDone) {
                    setEdit(!edit);
                    // }
                  }}
                >
                  Edit
                </button>
              </span>
            </>
          )}
          {edit && <input type="text" />}
        </li>
      </div>
    </div>
  );
};

export default TodosCard;
