// Importamos useState de React
import { useState } from "react";

/**
 * Creamos un custom hook llamado useLocalStorage que recibe dos parámetros, el primero es la key y el segundo es el valor inicial.
 */

const useLocalStorage = (key, initialValue) => {
  // Obtenemos el valor del localStorage, si no existe, se le asigna el valor inicial
  let localStorageItem = JSON.parse(localStorage.getItem(key)) ?? initialValue;

  // Si el localStorageItem existe pero está vacio, volvemos a asignar su valor inicial
  if (!localStorageItem.length) localStorage.setItem(key, JSON.stringify(initialValue))

  // Creamos un estado usando el useState y le pasamos el valor del localStorage
  const [item, setItem] = useState(localStorageItem);

  // Creamos una función que recibirá el nuevo valor del estado y lo guardará en el localStorage
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(key, stringifiedItem);
    setItem(newItem);
  }

  return [item, saveItem];
}

export { useLocalStorage };