// Importación del hook useContext
import { useContext } from "react";

// Componentes
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoItem } from "../../components/TodoItem";
import { TodoList } from "../../components/TodoList";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoContext } from "../../store/context";
import { Modal } from "../../components/Modal";

const AppUI = ({ }) => {
  // Obtenemos los valores del contexto
  const {
    loading,
    error,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {!loading && !error
        ? (<TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              onToggle={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>)
        : <p>Estamos obteniendo la información...</p>}

      {/* Estamos cargando el portal */}
      {
        openModal && (
          <Modal>
            <p>Soy un portal</p>
          </Modal>
        )
      }
      <CreateTodoButton />
    </>
  );
};

export { AppUI };
