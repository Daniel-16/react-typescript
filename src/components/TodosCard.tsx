import React, { useState } from "react";
import { Todo } from "../model";
// import "./card.css";
import Edit from "./Edit";

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
  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };
  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <div className="container mt-3 text-center">
      <li className="todos" style={{ listStyleType: "none" }}>
        {todo.isDone ? (
          <>
            <br />
            <s>{todo.todo}</s>
            <span style={{ marginLeft: 10 }}>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                x
              </button>{" "}
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => handleDone(todo.id)}
              >
                {todo.isDone ? "Undone" : "Done"}
              </button>{" "}
              <button
                className="btn btn-sm btn-primary"
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
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                x
              </button>{" "}
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => handleDone(todo.id)}
              >
                Done
              </button>{" "}
              <button
                className="btn btn-sm btn-primary"
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
        {/* {edit && <input type="text" value={editTodo} onChange={handleEdit} />} */}
        {edit && (
          <Edit
            editTodo={editTodo}
            handleEdit={handleEdit}
            handleEditSubmit={handleEditSubmit}
            todo={todo}
          />
        )}
      </li>
    </div>
  );
};

export default TodosCard;
