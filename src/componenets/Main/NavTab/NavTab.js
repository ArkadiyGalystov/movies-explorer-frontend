import { Link } from 'react-router-dom';
import './NavTab.css'

function NavTab() {
  return (
    <section className='navtab'>
      <nav className='navtab__nav'>
        <ul className='navtab__links'>
          <li className='navtab__items'>
            <Link to='aboutproject' smooth={true} duration={500}>
              <button type='button' className='navtab__link'>О проекте</button>
            </Link>
          </li>
          <li className='navtab__items'>
            <Link to='techs' smooth={true} duration={500}>
              <button type='button' className='navtab__link'>Технологии</button>
            </Link>
          </li>
          <li className='navtab__items'>
            <Link to='aboutme' smooth={true} duration={500}>
              <button type='button' className='navtab__link'>Студент</button>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default NavTab
