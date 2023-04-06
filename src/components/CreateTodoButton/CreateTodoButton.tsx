// Estilos
import './CreateTodoButton.css';

const CreateTodoButton = () => {
  const onClickButton = (message: string) => {
    console.log(message);
  }

  return (
    <button className="CreateTodoButton"
      onClick={() => onClickButton('Open modal')}
    >+</button>
  )
}

export { CreateTodoButton };