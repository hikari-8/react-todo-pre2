import React from "react";

export const CompleteTodos = (props) => {
  const { todos, returnTodo } = props;
  return (
    <div className="complete-area">
      <ul>
        <div className="title">完了したTodo</div>
        {todos.map((todos, index) => {
          return (
            <div key={todos} className="list-row">
              <li>{todos}</li>
              <button onClick={() => returnTodo(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
