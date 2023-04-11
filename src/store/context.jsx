import { createContext } from "react";

const TodoContext = createContext(); 

const TodoProvider = (props) => {
  return (
    <TodoContext.Provider>
      {props.children}
    </TodoContext.Provider>
  )
};