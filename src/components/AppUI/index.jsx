// Componentes
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

const AppUI = ({
  loading,
  error,
  completedTodos,
  allTodos,
  search,
  setSearch,
  searchedTodos,
  toggleCompleteTodo,
  deleteTodo,
}) => {
  return (
    <>
      <TodoCounter completedTodos={completedTodos} allTodos={allTodos} />
      <TodoSearch search={search} setSearch={setSearch} />
      {!loading && !error
        ? <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              onToggle={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        : <p>Estamos obteniendo toda la información</p>
      }
      {error && <p>Hubo un error</p>}

      <CreateTodoButton />
    </>
  );
};

export { AppUI };
