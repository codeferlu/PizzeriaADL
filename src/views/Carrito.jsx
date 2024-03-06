
import React from 'react';
import { useContext } from 'react';
import { ContextApp } from '../App';

const Carrito = (props) => {
  const c = useContext(ContextApp)
  return (
    <div>
      <h2>Este es un componente simple de carrito</h2>
      <ul>
      {
        c.carritoPizzas.map((pizzas) => <li>{pizzas}</li>)
      }
      </ul>
    </div>
  );
};

export default Carrito;
