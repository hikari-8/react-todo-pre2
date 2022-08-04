import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { newTodo, onChange, onClick, disabled } = props;
  return (
    <>
      <div style={style}>
        <input
          placeholder="Todoを入力"
          value={newTodo}
          onChange={onChange}
        ></input>
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
