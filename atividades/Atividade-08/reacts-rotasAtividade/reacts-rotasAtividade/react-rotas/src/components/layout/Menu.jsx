import './Menu.css'
import React from "react";

import { Link } from 'react-router-dom';

const Menu = props => {
    return (


<nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
<div class="container-fluid">
  
  <a className="navbar-brand" href="#">
                        <i className="fa fa-calendar-check-o"></i> Todo App
                    </a>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav me-auto mb-2 mb-md-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/todos">Todo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">Sobre</a>
      </li>
    </ul>
  </div>
</div>
</nav>
    )
}

export default Menu;