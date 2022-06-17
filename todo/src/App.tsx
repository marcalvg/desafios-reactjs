import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItems } from "./components/ListItems";

export function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão", done: false },
    { id: 2, name: "Comprar requeijão", done: true },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        {list.map((item, index) => (
          <ListItems key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}
