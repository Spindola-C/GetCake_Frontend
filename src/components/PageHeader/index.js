import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import Cart from '../../assets/images/cart.svg'
import ButtonHamburger from '../ButtonHamburger'
import { useCart } from '../../hooks/useCart'

import './styles.css'

function PageHeader ({ title }) {
  const { products } = useCart()
  const [menuVisivel, setMenuVisivel] = useState(false)

  function toggleMenuVisivel (e) {
    e.preventDefault()
    setMenuVisivel(!menuVisivel)
  }

  const qtyProducts = products.reduce((cont, current) => {
    const total = cont + current.quantity
    return total
  }, 0)

  return (
    <>
      <header className='page-header'>
        <div className='top-bar-container'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>

          <div className='title-container'>
            <h1>{title}</h1>
          </div>
          <nav className='options-container-max'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <input type='checkbox' id='check1' />
                <label for='check1'>Cadastro</label>
                <ul>
                  <li>
                    <Link to='/cadastro/cliente'>Cliente</Link>
                  </li>
                  <li>
                    <Link to='/cadastro/funcionario'>Funcionário</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/admin/login'>Login</Link>
              </li>
              <li className='header-cart'>
                <Link to='/carrinho'>
                  <img src={Cart} alt='Carrinho' />
                  {products.length > 0 && (
                    <div className='header-cart--items'>
                      <span>{qtyProducts}</span>
                    </div>
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          <ButtonHamburger
            visivel={menuVisivel}
            onClick={e => toggleMenuVisivel(e)}
          />
        </div>
        <div className={!menuVisivel ? 'menu-toggle' : 'menu-toggle open-menu'}>
          <nav className='options-container'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <input type='checkbox' id='check2' />
                <label for='check2'>Cadastro</label>
                <ul>
                  <li>
                    <Link to='/cadastro/cliente'>Cliente</Link>
                  </li>
                  <li>
                    <Link to='/cadastro/funcionario'>Funcionário</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/admin/login'>Login</Link>
              </li>
              <li className='header-cart'>
                <Link to='/carrinho'>
                  <img src={Cart} alt='Carrinho' />
                  {products.length > 0 && (
                    <div className='header-cart--items'>
                      <span>{qtyProducts}</span>
                    </div>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='title-container-max'>
        <h1>{title}</h1>
      </div>
    </>
  )
}

export default PageHeader
