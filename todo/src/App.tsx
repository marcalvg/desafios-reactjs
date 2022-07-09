import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItems } from "./components/ListItems";
import { AddArea } from "./components/AddArea";

export function App() {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const updatedStatus = (checked: boolean, id: number) => {
    let newList = [...list];
    for (const i in newList) {
      if ((newList[i].id = id)) newList[i].done = checked;
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItems key={index} item={item} onClick={updatedStatus} />
        ))}
      </C.Area>
    </C.Container>
  );
}
