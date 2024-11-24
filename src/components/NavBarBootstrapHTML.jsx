import { NavLink } from "react-router-dom"


const NavbarBootstrapHTML = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>CoffeCap</NavLink>
    <button className="navbar-toggler-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          productos
        </NavLink>  
      <ul className="dropdown-menu">
        <li><NavLink className="dropdown-item" to='/products/mas vendidos'>Mas Vendidos</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
        <li><NavLink className="dropdown-item" to='/products/ofertas'>ofertas</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
        <li><NavLink className="dropdown-item" to='/products/nuevos'>Nuevos Ingresos</NavLink></li>
     </ul>
   </li>
  </ul>
 </div>
</div>
</nav>
    )
}
export default NavbarBootstrapHTML