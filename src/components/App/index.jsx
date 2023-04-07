// Importaciones
import { useState } from "react";
import { AppUI } from "../AppUI";

const defaultTodos = [
  { text: "Aprender React", completed: false },
  { text: "Aprender React 2", completed: false },
  { text: "Aprender React 3", completed: true },
];

const App = () => {
  // El "hook" método useState() devuelve un array con dos elementos
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  // Constantes que se enviarán al componente TodoCounter
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const allTodos = todos.length;

  // Validar si el input no tiene texto y mostrar todos los todos, de lo contrario, filtrarlos
  let searchedTodos = [];
  if (!(search.length >= 1)) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      if (todoText.includes(search.toLowerCase())) {
        return todo;
      }
    });
  }

  // Cambiar el estados de los ToDos
  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  // Eliminar un ToDo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      allTodos={allTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export { App };
