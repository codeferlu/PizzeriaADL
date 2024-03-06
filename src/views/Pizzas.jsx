
import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

const Pizzas = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div>
      <h1>Menú de Pizzas</h1>
      <ul>
        {pizzas.map(pizza => (
          <li key={pizza.id}>
            <h2>{pizza.name}</h2>
            <p>{pizza.desc}</p>
            <img src={pizza.img} alt={pizza.name} />
            <p>Precio: ${pizza.price}</p>
            <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizzas;
