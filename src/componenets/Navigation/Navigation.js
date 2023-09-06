import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='navigation'>
      <button className='navigation__open' type='button' onClick={handleOpen}></button>

      <div className={`navigation__container ${ isOpen ? 'navigation__container_active' : '' }`}>
        <div className='navigation__sidebar'>
          
          <div className='navigation__content'>
            <button className='navigation__close' type='button' onClick={handleOpen}></button>

            <nav className='navigation__items'>              
              <div className='navigation__links'>
                <NavLink to='/movies' className={({ isActive }) => `navigation__link ${ isActive ? 'navigation__link_active' : '' }`}>Фильмы</NavLink>
              </div>
              
              <div className='navigation__links'>
                <NavLink to='/saved-movies' className={({ isActive }) => `navigation__link ${ isActive ? 'navigation__link_active' : '' }`}>Сохранённые фильмы</NavLink>
              </div>
            </nav>
          </div>

          <NavLink to='/profile' className='navigation__link navigation__link_profile navigation__link_active'>Аккаунт</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;