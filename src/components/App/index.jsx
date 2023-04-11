// Importaciones
import { TodoProvider } from "../../store/context";
import { AppUI } from "../../views/AppUI";

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export { App };
