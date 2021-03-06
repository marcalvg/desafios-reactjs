import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";

type Props = {
  item: Item;
  onClick: (checked: boolean, id: number) => void;
};

export function ListItems({ item, onClick }: Props) {
  const [isChecked, setIsChecked] = useState(item.done);
  const updateStatusTask = () => {
    onClick(!isChecked, item.id);
  };
  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onClick={updateStatusTask}
      />
      <label>{item.name}</label>
    </C.Container>
  );
}
