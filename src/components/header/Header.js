import { useState } from 'react';
import { TiUserOutline } from "react-icons/ti";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  return (
    <header>
      {/* logo */}
      <h1 className='logo'>OPÇÃO</h1>

      <button onClick={() => setOpen(!open)} className="menu-icon-button">
        {open ? <FaTimes size={28} color="#333" /> : <FaBars size={28} color="#333" />}
      </button>

      {/* tab */}
      <div className="tab">
        <div className="dropdown">
          <button className="tablinks">CATÁLOGO</button>
          <div className="dropdown-content">
            <h3>MASCULINO</h3>
            <a onClick={() => navigate('/catalogo')}>Ternos</a>
            <a href="#">Paletós</a>
            <a href="#">Camisas sociais</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="tablinks">ATACADO</button>
          <div className="dropdown-content">
            <a href="#">Função 1</a>
            <a href="#">Função 2</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="tablinks">PERSONALIZAÇÃO</button>
          <div className="dropdown-content">
            <a href="#">Função 1</a>
            <a href="#">Função 2</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="tablinks">QUEM SOMOS</button>
          <div className="dropdown-content">
            <a href="#">Função 1</a>
            <a href="#">Função 2</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="tablinks">ENTRE EM CONTATO</button>
          <div className="dropdown-content">
            <a href="#">Função 1</a>
          </div>
        </div>
      </div>

      <button className='icon'><TiUserOutline className='icone'/></button>
      <button className='icon'><RiShoppingCartLine className='icone'/></button>

    </header>
  );
}

