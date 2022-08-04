import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, deleteTodo, completedTodo } = props;
  return (
    <>
      <div className="incomplete-area">
        <ul>
          <div className="title">未完了のTodo</div>
          {todos.map((todos, index) => {
            return (
              <div key={todos} className="list-row">
                <li>{todos}</li>
                <button onClick={() => deleteTodo(index)}>削除</button>
                <button onClick={() => completedTodo(index)}>完了</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
