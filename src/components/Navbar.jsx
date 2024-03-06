// Navbar.jsx
import React from 'react';


const Navbar = () => {
  return (
      <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizzas</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
        </li>
        {/* Agrega más elementos según sea necesario */}
      </ul>
    </nav>

  );
};

export default Navbar;
