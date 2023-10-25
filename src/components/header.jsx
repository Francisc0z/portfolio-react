import React from 'react';
import '../styles/header.css'
import { NavLink } from 'react-router-dom';

const NavItem = (props)=> {
    console.log(props)
    return (
        <li className="nav-item">
            <NavLink exact to={props.link} className="nav-link" activeClassName="active">
              {props.name}
            </NavLink>
        </li>
    )
}

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#opciones">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="index.html">
          <h1>Vic</h1>
          <picture>
            <img src="imagenes/logo/LOGO.png" alt="logo" className="img-fluid" />
          </picture>
        </a>

        <div className="collapse navbar-collapse justify-content-end" id="opciones">
          <ul className="navbar-nav p-4">
            <NavItem link={'/'} name='Home' />
            <NavItem link={'/art'} name='Art' />
            <NavItem link={'/projects'} name='Projects' />
            <NavItem link={'/aboutMe'} name='About Me' />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
