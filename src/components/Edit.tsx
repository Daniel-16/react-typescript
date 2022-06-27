import React, { useRef, useEffect } from "react";
import { Todo } from "../model";
interface Props {
  editTodo: string;
  handleEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditSubmit: (e: React.FormEvent, id: number) => void;
  todo: Todo;
}

const Edit = ({ editTodo, handleEdit, handleEditSubmit, todo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [editTodo]);
  return (
    <div className="text-center">
      <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
        <input
          ref={inputRef}
          type="text"
          value={editTodo}
          onChange={handleEdit}
          className="form-control w-50"
        />
      </form>
    </div>
  );
};

export default Edit;
