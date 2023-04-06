// Importaciones
import { InputEvent } from '../../models/React';

// Interfaz para recibir las propiedades del componente padre "useState".
import { TodoSearchProps } from '../../models/TodoSearch';

// Estilos
import './TodoSearch.css';


const TodoSearch = ({ search, setSearch }: TodoSearchProps) => {
  const onWrite = (event: InputEvent) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <input
        className="TodoSearch"
        type="text"
        value={search}
        placeholder="Nuevo ToDo..."
        onChange={(event) => onWrite(event)}
      />
      {search}
    </>
  )
}

export { TodoSearch };