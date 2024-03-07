import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = (props) => {
    return (
        <Navbar className="bg-body-tertiary">
             <Container>
            <NavLink to="/">Pizzeria ADL</NavLink>
            <NavLink to="/pizzas">Nuestro Catalogo</NavLink>
            <NavLink to="/carrito">Carrito - Lleva tu Pizza</NavLink>
            </Container>
        </Navbar>
    )
}
export default Header