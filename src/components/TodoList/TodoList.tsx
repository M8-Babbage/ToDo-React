// Estilos
import './TodoList.css';

// Interfaces
import { Props } from '../../models/React';

const TodoList = ({ children }: Props) => {
  return (
    <section>
      <ul>
        {children}
      </ul>
    </section>
  )
}

export { TodoList };