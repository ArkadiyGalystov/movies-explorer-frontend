import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation.js'
import LoginNavigation from '../LoginNavigation/LoginNavigation.js'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = ({ loggedIn }) => {
  return (
    <header className='header'>
      <Link to='/' className='header__link'>
        {<img className='header__logo' src={logo} alt='Лого' />}
      </Link>
      {!loggedIn && <LoginNavigation/>
      }
      {loggedIn && <Navigation/>
      }
    </header>
  )
}

export default Header
