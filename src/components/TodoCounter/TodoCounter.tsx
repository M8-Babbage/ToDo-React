// Importamos el css
import { TodoCounterProps } from '../../models/TodoCounter';
import './TodoCounter.css'

const TodoCounter = ({ completedTodos, allTodos }: TodoCounterProps) => {
  return (
    <>
      <h2 className='TodoCounter'>Has completado {completedTodos} de {allTodos} TODOs</h2>
    </>
  )
}

export { TodoCounter };