// Interfaces
import { Todo } from "./models/Todo"

// Componenentes
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton"
import { TodoCounter } from "./components/TodoCounter/TodoCounter"
import { TodoItem } from "./components/TodoItem/TodoItem"
import { TodoList } from "./components/TodoList/TodoList"
import { TodoSearch } from "./components/TodoSearch/TodoSearch"

const todos: Todo[] = [
  { text: 'Aprender React', completed: true },
  { text: 'Aprender React 2', completed: false},
  { text: 'Aprender React 3', completed: true },
]

const App = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export { App };