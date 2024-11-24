import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <NavLink className='aLink' to= '/'>Coffe Shop</NavLink>
            <NavLink className='aLink' to= '/products/nuevos'>Nuevos Ingresos</NavLink>
            <NavLink className='aLink' to='/products/ofertas'>Ofertas</NavLink>
            <NavLink className='aLink' to='/products/mas vendidos'>Mas Vendidos</NavLink>
            <NavLink className='aLink' to='/cart'><CartWidget counter={15}/></NavLink>
        </nav>
    )
}

export default NavbarComponent
