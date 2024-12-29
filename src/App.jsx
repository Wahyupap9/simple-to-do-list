import { useState } from "react";
import "./App.css";
import ContentList from "./components/contentList";
import Buttons from "./components/buttons";
const isi = [
  {
    content: "Read Onani Master Kurosawa",
    id: 1,
    checked: false,
  },
  {
    content: "Play Omori",
    id: 2,
    checked: false,
  },
  {
    content: "Play Black Souls",
    id: 3,
    checked: false,
  },
  {
    content: "Play Doki Doki Literature Club",
    id: 4,
    checked: true,
  },
];

export default function App() {
  const [contentList, setContentList] = useState(isi);

  function deleteItem(id) {
    setContentList(contentList.filter((content) => content.id !== id));
  }

  function handleCheck(id) {
    setContentList((prevList) =>
      prevList.map((content) =>
        content.id === id ? { ...content, checked: !content.checked } : content
      )
    );
  }

  function addItem(input) {
    if (input === "") return;
    const newTodo = {
      content: input,
      id: new Date(),
      checked: false,
    };
    setContentList([...contentList, newTodo]);
  }

  return (
    <div className="h-[80vh] w-[50vw] border-4 border-yellow-950 rounded-xl overflow-hidden bg-yellow-100 mt-14 flex mx-auto">
      <ContentList
        deleteItem={deleteItem}
        handleCheck={handleCheck}
        contentList={contentList}
      />
      <Buttons addItem={addItem} />
    </div>
  );
}
