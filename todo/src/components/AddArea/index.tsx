import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export function AddArea({ onEnter }: Props) {
  const [item, setItem] = useState("");
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter" && item !== "") {
      onEnter(item);
      setItem("");
    }
  };
  return (
    <C.Container>
      <div className="image">+</div>
      <input
        type="text"
        name="new-tarefa"
        id="new-tarefa"
        placeholder="Adicione uma tarefa"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </C.Container>
  );
}
