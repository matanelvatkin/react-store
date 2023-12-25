import { useState } from "react";
import Content from "./Content";
import Cart from "./Cart";
import DataContext from "./context/DataContext";
import Menu from "./Menu";
import data from "./assets/data";

export default function Layout() {
  const all = ()=>{
    const returnValue =[]
    Object.keys(items).forEach(key=>{
      returnValue.push(...items[key])
      })
    return returnValue
  }
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState({});
  const categories = Object.keys(items);
  const [inputSearch, setInputSearch] = useState();
  const [choice, setChoice] = useState(all());
  const onClick = (e) => {
    if (e.target.value !== "all")
      setChoice(items[e.target.value] ? items[e.target.value] : []);
    else{
      setChoice(all())
    }
  };

  return (
    <DataContext.Provider value={{ cart, setCart }}>
      <Menu
        categories={categories}
        handelCatagories={onClick}
        setInp={setInputSearch}
      />
      <div className="layout">
        <Cart />
        <Content items={choice} />
      </div>
    </DataContext.Provider>
  );
}
