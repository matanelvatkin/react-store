import { useState } from "react";
import ItemList from "./ItemList";

export default function Content({ items }) {
  const [choice, setChoice] = useState([]);
  const categories = Object.keys(items);
  const onClick = (e) => {
    setChoice(items[e.target.value]);
  };
  return (
    <div className="content">
      {/* <div>
        {categories.map((category) => (
          <button value={category} onClick={onClick}>
            {category}
          </button>
        ))}
      </div> */}
      <ItemList items={items} />
    </div>
  );
}
