import { useState } from "react";
import "./../App.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

export default function ToDo({ todo, deleteItem, handleCheck, index }) {
  return (
    <div
      key={todo.id}
      style={{ textDecoration: todo.checked ? "line-through" : null }}
      className="w-full indent-3 text-xl font-semibold flex"
    >
      {index}. {todo.content}
      <div className="text-3xl flex">
        <button onClick={() => deleteItem(todo.id)}>
          <IoCloseSharp className="text-red-600" />
        </button>
        <button onClick={() => handleCheck(todo.id)}>
          {" "}
          <FaCheck className="text-green-500" />
        </button>
      </div>
    </div>
  );
}
