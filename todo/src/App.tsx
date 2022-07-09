import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItems } from "./components/ListItems";
import { AddArea } from "./components/AddArea";

export function App() {
  const [list, setList] = useState<Item[]>([]);
  const [doneList, setDoneList] = useState<Item[]>([]);

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
    let newDoneList = [...doneList];
    if (checked) {
      for (const i in newList) {
        if (newList[i].id === id) {
          newList[i].done = checked;
          newDoneList.push(newList[i]);
          setDoneList(newDoneList);
          newList.splice(parseInt(i), 1);
          setList(newList);
        }
      }
    } else {
      for (const i in newDoneList) {
        if (newDoneList[i].id === id) {
          newDoneList[i].done = checked;
          newList.push(newDoneList[i]);
          setList(newList);
          newDoneList.splice(parseInt(i), 1);
          setDoneList(newDoneList);
        }
      }
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
        <br />
        <hr />
        <C.Header>Lista de Finalizadas</C.Header>
        <br />
        {doneList.map((item, index) => (
          <ListItems key={index} item={item} onClick={updatedStatus} />
        ))}
      </C.Area>
    </C.Container>
  );
}
