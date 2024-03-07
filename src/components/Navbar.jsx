import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = (props) => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
             <Container>
            <NavLink to="/" style={{ textDecoration: 'none' }}>Pizzeria ADL</NavLink>
            <NavLink to="/pizzas" style={{ textDecoration: 'none' }}>Nuestro Catalogo</NavLink>
            <NavLink to="/carrito" style={{ textDecoration: 'none' }}>Carrito - Lleva tu Pizza</NavLink>
            </Container>
        </Navbar>
    )
}
export default Header