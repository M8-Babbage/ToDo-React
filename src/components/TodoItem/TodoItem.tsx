// Interfaces
import { Todo } from "../../models/TodoItem";

// Estilos
import './TodoItem.css';

const TodoItem = ({ text, completed, onToggle, onDelete }: Todo) => {

  return (
    <li className="TodoItem">
      <span onClick={onToggle} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>√</span>

      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>

      <span onClick={onDelete} className="Icon Icon-delete">X</span>

    </li>
  )
}

export { TodoItem };