// PizzaContext.js
import React, { createContext, useState } from 'react';
import pizzasData from '../pizzas.json'; // Importa el JSON

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState(pizzasData);

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};
