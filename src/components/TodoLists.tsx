import React from "react";
import { Todo } from "../model";
import TodosCard from "./TodosCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoLists = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <TodosCard todo={todo} todos={todos} setTodos={setTodos} />
        </ul>
      ))}
    </div>
  );
};

export default TodoLists;
