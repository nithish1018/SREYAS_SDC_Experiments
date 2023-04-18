import React, { useEffect, useState } from "react";

export default function Todo() {
  const localStorageAdd = () => {
    const jsonParsed = JSON.stringify(allTodos);
    localStorage.setItem("todo", jsonParsed);
  };

  const localStorageGet = () => {
    const todoJSON = localStorage.getItem("todo");
    return todoJSON ? JSON.parse(todoJSON) : [];
  };

  const addTodo = (element: string) => {
    setCurrentTodo(element);
    setAllTodos((prev) => [...prev, currentTodo]);
  };

  const [currentTodo, setCurrentTodo] = useState<string>("");
  const [allTodos, setAllTodos] = useState<string[]>(localStorageGet());
  console.log(allTodos);

  useEffect(() => {
    localStorageAdd();
  }, [allTodos]);

  const deleteItem = (ele: string) => {
    const newList = allTodos.filter((item) => item !== ele);
    setAllTodos(newList);
  };

  return (
    <div className="center">
      <input
        placeholder="Add a todo"
        type="text"
        name="todo"
        id="todo"
        className="input"
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button className="button" onClick={() => addTodo(currentTodo)}>
        Add
      </button>
      <div className="todos">
        {allTodos.map((ele) => (
          <div className="card ">
            <p className="card-text">{ele}</p>
            <button className="button" onClick={() => deleteItem(ele)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
