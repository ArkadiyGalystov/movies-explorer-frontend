import React from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer footer__movies footer__saved-movies'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__content'>
        <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>

        <nav className='footer__links'>
          <a href='https://practikum.yandex.ru/' className='footer__link' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
          <a href='https://github.com/' className='footer__link' target='_blank' rel='noreferrer'>Github</a>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;
