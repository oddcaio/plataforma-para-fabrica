import './Header.css';
import { TiUserOutline } from "react-icons/ti";
import { RiShoppingCartLine } from "react-icons/ri";
import React, { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <diva>
      <header>
        {/* logo */}
        <h1>OPÇÃO</h1>

        {/*botão menu*/}
        <div className={`container ${open ? 'change' : ''}`} onClick={() => setOpen(!open)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
 <esconde>
        {/* header-nav */}
        {/* <nav className={`pill-nav ${open ? 'visible' : 'hidden'}`}>
          <div class="dropdown">
            <button class="dropbtn">CATÁLOGO
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">ATACADO
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">PERSONALIZAÇÃO
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">SOBRE NÓS
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">CONTATO
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div> */}

          {/* <a href='atacado'>ATACADO</a>
          <a href='personalizacao'>PERSONALIZAÇÃO</a>
          <a href='about-us'>SOBRE NÓS</a>
          <a href='contact'>CONTATO</a> */}
        {/* </nav> */}
        {/* icons */}
        </esconde>
        <TiUserOutline />
        <RiShoppingCartLine />
      </header>
    </diva>
  );
}

export default Header;
