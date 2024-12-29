import { useState } from "react";
import "./../App.css";
import ToDo from "./todo";

export default function ContentList({ handleCheck, deleteItem, contentList }) {
  //   console.log(contentList);
  return (
    <div className="w-[60%] p-5 flex flex-col gap-2">
      <h1 className="w-full text-3xl font-bold indent-5 mb-1">To Do List</h1>
      {contentList.map((todo, index) => {
        index += 1;
        return (
          <ToDo
            key={index}
            deleteItem={deleteItem}
            handleCheck={handleCheck}
            todo={todo}
            index={index}
          />
        );
      })}
    </div>
  );
}
