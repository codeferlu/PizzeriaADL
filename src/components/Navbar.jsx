import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pizzas">Pizzas</NavLink>
            <NavLink to="/carrito">Carrito</NavLink>
        </nav>
    )
}
export default Navbar