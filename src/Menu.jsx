import Search from "./Search";

export default function Menu(props) {
  return (
    <div>
      <div id="buttons">
        <button value={"all"} onClick={props.handelCatagories}>
          All
        </button>
        {props.categories.map((c) => (
          <button value={c} onClick={props.handelCatagories}>
            {c}
          </button>
        ))}
      </div>
      <Search setInp={props.setInp} />
    </div>
  );
}
