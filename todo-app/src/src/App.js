import React, {useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    // console.log("hey");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let todosLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todosLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Simple To-Do App</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />

      <TodoList
        setTodos={setTodos}
        todos={filteredTodos}
      />
    </div>
  );
}

export default App;
