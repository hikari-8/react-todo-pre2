import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [newTodo, setNewTodos] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeAddTodo = (e) => setNewTodos(event.target.value);

  const addNewTodo = () => {
    if (newTodo === "") return;
    const addNewTodofunc = [...incompleteTodos, newTodo];
    setIncompleteTodos(addNewTodofunc);
    setNewTodos("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const completedTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    const completedTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newTodos);
    setCompleteTodos(completedTodos);
  };

  const returnTodo = (index) => {
    const newTodos = [...incompleteTodos, completeTodos[index]];
    const completedTodos = [...completeTodos];
    completedTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    setCompleteTodos(completedTodos);
  };

  return (
    <>
      <InputTodo
        newTodo={newTodo}
        onChange={onChangeAddTodo}
        onClick={addNewTodo}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red", textAlign: "center" }}>
          登録できるTodoは5個までです！
          <br />
          消化してしまいましょう！
        </p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        deleteTodo={deleteTodo}
        completedTodo={completedTodo}
      />

      <CompleteTodos todos={completeTodos} returnTodo={returnTodo} />
    </>
  );
};
