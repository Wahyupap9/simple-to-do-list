import { useEffect, useState } from "react";
import Button from "./button";

export default function Buttons({ addItem }) {
  const [input, setInput] = useState("");

  return (
    <div className="w-[40%] px-10 border-l-4 justify-between border-yellow-950 h-full flex flex-col bg-yellow-100">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem(input);
          setInput("");
        }}
        className="adding flex flex-col"
      >
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="bg-transparent indent-4 font-semibold py-2 px-1 rounded my-5 border-4 border-yellow-950 w-[95%] mx-auto"
        />
        <Button content="Add New List" />
      </form>
      <div className="login flex flex-col gap-2 pb-10">
        {/* <Button content="Log in" />
        <Button content="Sign up" /> */}
      </div>
    </div>
  );
}
