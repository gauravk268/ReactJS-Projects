import React from "react";
import Todo from "./Todo";

const TodoList = ({ setTodos, todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} setTodos={setTodos} todos={todos} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
